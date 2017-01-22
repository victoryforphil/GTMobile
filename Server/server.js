
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





var router = express.Router();              // get an instance of the express Router
var schoolEventRoutes = require("./school_events_routes");
var BellScheduleRoutes = require("./bell_schedule_routes");

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json(Responses.SERVER_STATUS_ONLINE);
});

router.use("/schoolevents",schoolEventRoutes);
router.use("/bellschedule",BellScheduleRoutes);



io.on('connection', function(socket){
  console.log('[SocketIO] Client Connected!');
});

app.use('/api', router);


http.listen(port);
console.log('Server Starrted on: ' + port);
