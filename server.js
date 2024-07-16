const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    console.log('Got body:', req.body);
    res.send(`Received your request! Name: ${req.body.username}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});