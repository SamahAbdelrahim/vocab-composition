function test1() {
    console.log('test1')
}

function logExpData() {
    const logData = {
        rt: 5,
        trial_type: 'hg',
        trial_index: 2,
        time_elapsed: 2,
        internal_node_id:2,
        subject: 'jhjgfgh',
        
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