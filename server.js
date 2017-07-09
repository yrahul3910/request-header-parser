const express = require('express');
let app = express();

app.get('/api/whoami', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    let ip = req.headers['x-forwarded-for'].match(/^(\d+.\d+.\d+.\d+),/)[1];
    let language = req.headers['accept-language'].match(/^(.*),/)[1];
    let system = req.headers['user-agent'].match(/\((.*)\)/)[1];

    res.end(JSON.stringify({ip, language, system}));
});
app.listen(process.env.PORT);