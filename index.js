const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
app.use(
	express.json(),
	express.urlencoded({
		extended: true,
  }));
app.use(express.static(path.join(__dirname, 'public')));

//app.get('/', (req, res) => {
//	res.send('Hello from Concordia University');
//});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/', (req, res) => {
  console.log('Got body:', req.body);
  res.send("Received your request! Name: " + req.body.username);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
