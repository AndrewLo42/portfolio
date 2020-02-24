/* eslint-disable no-console */
var nodemailer = require('nodemailer');
const creds = require('./mailconfig');
const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public/');
const staticMiddlware = express.static(publicPath);

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.use(staticMiddlware);
app.use(express.json());

app.get('/api/hi', (req, res, next) => {
  console.log('hi');
  res.json('hi');
});

app.post('/api/send', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: 'arcticapocalypse@gmail.com', // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      });
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port, 8000');
});
