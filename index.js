const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    //res.send('Welcome to Countdown');
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Countdown is running on port ', port);
})