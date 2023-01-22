const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/earth', (req, res) => {
    res.send('Wrlcome to earth');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
