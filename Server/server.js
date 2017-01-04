
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var Responses  = require ('./responses')
var http = require('http').Server(app);
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCrossDomain);
var io = require('socket.io')(http);
var mongoose   = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/GTMobile')

var port = process.env.PORT || 7777;        // set our port


var SchoolEvent = require('./models/SchoolEvent');


var router = express.Router();              // get an instance of the express Router



// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json(Responses.SERVER_STATUS_ONLINE);
});

router.route('/schoolevents')
    .post(function(req, res) {

        var _schoolEvent = new SchoolEvent();
        _schoolEvent.name = req.body.name;
        _schoolEvent.desc = req.body.desc;
        _schoolEvent.startDate = req.body.startDate;
        _schoolEvent.endDate = req.body.endDate;
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
            io.emit('UPDATE_EVENTS');
            console.log("[SocketIO] Alerting Clients of Update!");
        });

    })
    .get(function(req, res) {
        SchoolEvent.find(function(err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
    });

router.route('/schoolevents/:event_id')
    .get(function(req, res) {
        SchoolEvent.findById(req.params.event_id, function(err, event) {
            if (err)
                res.send(err);
            res.json(event);
        });
    })
    .put(function(req, res) {

       // use our bear model to find the bear we want
       SchoolEvent.findById(req.params.event_id, function(err, event) {

           if (err)
               res.send(err);

           event.name = req.body.name;  // update the bears info
           event.desc = req.body.desc;  // update the bears info
           // save the bear
           event.save(function(err) {
               if (err)
                   res.send(err);

               res.json({ message: 'Event updated!' });
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
        });
    });




io.on('connection', function(socket){
  console.log('[SocketIO] Client Connected!');
});

app.use('/api', router);


http.listen(port);
console.log('Server Starrted on: ' + port);
