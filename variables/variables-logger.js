const mongoose = require('mongoose')

const varlogschema = new mongoose.Schema( {
    rt: Number,
    trial_type: String,
    trial_index: Number,
    time_elapsed: Number,
    internal_node_id: Number,
    subject: String,
    response: String,
    theword: String,
    block: String,
    study_id: String,
    session_id: String,
}) ;
console.log("varlogschema");
console.log(varlogschema);

const varlog = mongoose.model('varlog', varlogschema);
module.exports = varlog ;

    // response: {
    //     Q0: String
    //   },