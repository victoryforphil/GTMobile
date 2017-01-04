var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SchoolEventSchema   = new Schema({
    name: String,
    desc: String,
    startDate: Date,
    endDate: Date
});

module.exports = mongoose.model('SchoolEvent', SchoolEventSchema);
