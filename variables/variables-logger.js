const mongoose = require('mongoose')

const varlogschema = new mongoose.Schema( {
    rt: Number,
    trial_type: String,
    trial_index: Number,
    time_elapsed: Number,
    internal_node_id: Number,
    subject: String,
}) ;

const varlog = mongoose.model('varlog', varlogschema);
module.exports = varlog ;