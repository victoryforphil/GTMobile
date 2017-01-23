const express = require('express');
var router = express.Router();
var BellSchedule = require('./models/BellSchedule');
var Responses = require('./responses')

router.route('/')
    .post(function(req, res) {
        console.log(req.body);
        var _bellSchedule = new BellSchedule();
        _bellSchedule.peroids = req.body.peroids;
        _bellSchedule.date = req.body.date;
        _bellSchedule.special = req.body.special;

        // save the bear and check for errors
        _bellSchedule.save(function(err) {
            if (err) {
                var response = Responses.CREATE_EVENT_FAILED;
                response.error = err;
                res.json(response);
            }
            console.log("Creating BellSchedule: " + _bellSchedule);
            res.json(Responses.CREATE_EVENT_SUCCESS);
            //io.emit('UPDATE_EVENTS');
            //  console.log("[SocketIO] Alerting Clients of Update!");
        });
        BellSchedule.find({}).sort('-date').exec(function(err, docs) { console.log(err); console.log(docs); });

    })
    .get(function(req, res) {
        BellSchedule.find().sort({'date': '1'}).exec(function(err, events) {
            if (err)
                res.send(err);
            console.log("[HTTP API] Sending " + events.length + " bell schedules to client!");
            res.json(events);
        });
    });

router.route('/:bell_id')
    .get(function(req, res) {
        if(req.params.bell_id == "CURRENT"){
          BellSchedule.find().sort({'date': '1'}).exec(function(err, events) {
              if (err)
                  res.send(err);
              console.log("[HTTP API] Sending current bell schedules to client!");
              res.json(events[0]);
          });
        }else{
          BellSchedule.findById(req.params.bell_id, function(err, bell) {
              if (err)
                  res.json(err);
                  console.log("[HTTP API] Sending id bell schedules to client!");
              res.json(bell);
          });
        }
    })
    .put(function(req, res) {
        console.log("PUTTING!");

        // use our bear model to find the bear we want
        BellSchedule.findById(req.params.bell_id, function(err, _bellSchedule) {

            if (err)
                res.send(err);

            _bellSchedule.peroids = req.body.peroids;
            _bellSchedule.date = req.body.date;
            _bellSchedule.special = req.body.special;

            _bellSchedule.save(function(err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'Event updated!'
                });
                //io.emit('UPDATE_EVENT', req.params.event_id);
                // console.log("[SocketIO] Alerting Clients of Update!");
            });

        });

        BellSchedule.find({}).sort('-date').exec(function(err, docs) { console.log(err); });
    })
    .delete(function(req, res) {
        BellSchedule.remove({
            _id: req.params.bell_id
        }, function(err, event) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
            //io.emit('UPDATE_EVENTS');
            //console.log("[SocketIO] Alerting Clients of Update!");
        });
    });



module.exports = router;
