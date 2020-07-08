const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require("body-parser")
var fs = require('fs');
var nodemailer = require('nodemailer');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const cors = require('cors');
const path = require("path");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.post('/email', async (req, res) => {
  console.log(req.body)

  console.log('inside the get')
  await sendmail(req.body);
  res.send("success")
})
async function sendmail(props) {
  console.log(props)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'witeink@gmail.com',
      pass: 'uijcbrynmcaonogt'
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  var mailOptions = {
    from: 'witeink@gmail.com',
    to: 'witeink@gmail.com',
    subject: 'INQUIRY FROM PORTFOLIO',
    text: `hello, My name is ${props.name}, \n My Email address is ${props.email} and I was just hoping to say \n ${props.message}`
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
app.post('/', function (req, res) {
  console.log(req.body)
  res.send('Got a POST request')
})

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


