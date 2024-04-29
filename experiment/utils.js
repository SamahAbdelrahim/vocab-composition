function test1() {
    console.log('test1')
}

function logExpData(data) {
    // console.log("data")
    // //console.log(data)
    // console.log(data.response)
    const logData = {
        rt: data.rt,
        trial_type: data.trial_type,
        trial_index: data.trial_index,
        time_elapsed: data.time_elapsed,
        internal_node_id: parseFloat(data.internal_node_id), // Parse string to number
        subject: data.subject_id,
        response: JSON.stringify(data.response),
        theword: data.theword, 
        block: data.theblock,
        study_id: data.study_id,
        session_id: data.session_id,
    };
    

    fetch('/api/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error logging action:', error));
};