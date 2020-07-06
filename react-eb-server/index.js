const express = require('express');
const path = require('path');
const open = require('open');

let port = 8080;
let app = express();

app.use(express.static(path.join(__dirname, '..', 'react-eb-ui', 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'react-eb-ui', 'build', 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});