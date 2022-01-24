/*************************/
/*
const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 1001;
const users = []; */

/*************************/

var QRCode = require('qrcode')

QRCode.toDataURL('I am a pony!', function (err, url) {
  console.log(url)
})

/*************************/

/*
app.use(bodyParser.json());
app.use(express.static("../dist/qr-now/")); */

/*************************/

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile("../dist/qr-now/index.html")
});

/*************************/

app.listen(port, () => {
    console.log(`Server listening on the port:: ${port}`);
});

/*************************/
