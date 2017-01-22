const express = require('express');
var router = express.Router();
var BellSchedule = require('./models/BellSchedule');
var Responses  = require ('./responses')
router.route('/')
    .post(function(req, res) {
        console.log(req.body);
        var _bellSchedule = new BellSchedule();
        _bellSchedule.peroids = req.body.peroids;
        _bellSchedule.date = req.body.date;

        // save the bear and check for errors
        _bellSchedule.save(function(err) {
            if (err){
              var response = Responses.CREATE_EVENT_FAILED;
              response.error = err;
              res.json(response);
            }
            console.log("Creating BellSchedule: " + _bellSchedule);
            res.json(Responses.CREATE_EVENT_SUCCESS);
            //io.emit('UPDATE_EVENTS');
          //  console.log("[SocketIO] Alerting Clients of Update!");
        });

    })
    .get(function(req, res) {
        BellSchedule.find(function(err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
    });

module.exports = router;
