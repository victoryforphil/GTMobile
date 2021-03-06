const express = require('express');
var router = express.Router();
var SchoolEvent = require('./models/SchoolEvent');
var Responses  = require ('./responses')
router.route('/')
    .post(function(req, res) {
        console.log(req.body);
        var _schoolEvent = new SchoolEvent();
        _schoolEvent.name       = req.body.name;
        _schoolEvent.desc       = req.body.desc;
        _schoolEvent.startDate  = req.body.startDate;
        _schoolEvent.endDate    = req.body.endDate;
        _schoolEvent.startTime  = req.body.startTime;
        _schoolEvent.endTime    = req.body.endTime;
        if(!_schoolEvent.name){
          var response = Responses.CREATE_EVENT_FAILED;
          response.error = "Please enter a name for the event!";
          res.json(response);
          return;
        }

        if(!_schoolEvent.desc){
          var response = Responses.CREATE_EVENT_FAILED;
          response.error = "Please enter a desc for the event!";
          res.json(response);
          return;
        }

        // save the bear and check for errors
        _schoolEvent.save(function(err) {
            if (err){
              var response = Responses.CREATE_EVENT_FAILED;
              response.error = err;
              res.json(response);
            }
            console.log("Creating Event: " + _schoolEvent);
            res.json(Responses.CREATE_EVENT_SUCCESS);
            //io.emit('UPDATE_EVENTS');
          //  console.log("[SocketIO] Alerting Clients of Update!");
        });

    })
    .get(function(req, res) {
        SchoolEvent.find(function(err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
    });

router.route('/:event_id')
    .get(function(req, res) {
        SchoolEvent.findById(req.params.event_id, function(err, event) {
            if (err)
                res.error(err);
            res.json(event);
        });
    })
    .put(function(req, res) {
      console.log("PUTTING!");
       // use our bear model to find the bear we want
       SchoolEvent.findById(req.params.event_id, function(err, _schoolEvent) {

           if (err)
               res.send(err);

           _schoolEvent.name       = req.body.name;
           _schoolEvent.desc       = req.body.desc;
           _schoolEvent.startDate  = req.body.startDate;
           _schoolEvent.endDate    = req.body.endDate;
           _schoolEvent.startTime  = req.body.startTime;
           _schoolEvent.endTime    = req.body.endTime;

           _schoolEvent.save(function(err) {
               if (err)
                   res.send(err);

               res.json({ message: 'Event updated!' });
               //io.emit('UPDATE_EVENT', req.params.event_id);
              // console.log("[SocketIO] Alerting Clients of Update!");
           });

       });
   })
   .delete(function(req, res) {
        SchoolEvent.remove({
            _id: req.params.event_id
        }, function(err, event) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
            //io.emit('UPDATE_EVENTS');
            //console.log("[SocketIO] Alerting Clients of Update!");
        });
    });


module.exports = router;
