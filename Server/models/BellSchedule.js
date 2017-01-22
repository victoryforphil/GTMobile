var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BellScheduleSchema   = new Schema({
    peroids: Array,
    date: Date
});

module.exports = mongoose.model('BellSchedule', BellScheduleSchema);
