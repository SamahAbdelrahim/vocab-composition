const mongoose = require('mongoose')

const varlogschema = new mongoose.Schema( {
    rt: Number,
    trial_type: String,
    trial_index: Number,
    time_elapsed: Number,
    internal_node_id: Number,
    subject: String,
    response: String,
    // response: {
    //     Q0: String
    //   },
    theword: String,
    block: String,
    study_id: String,
    session_id: String,
}) ;
console.log("hello")
const varlog = mongoose.model('varlog', varlogschema);
module.exports = varlog ;