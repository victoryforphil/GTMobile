var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SchoolEventSchema   = new Schema({
    name: String,
    desc: String,
    startDate: String,
    endDate: String,
    startTime: String,
    endTime: String
});

module.exports = mongoose.model('SchoolEvent', SchoolEventSchema);
