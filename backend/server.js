const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { services, date, phoneNumber, address } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contact.udstudio@gmail.com',
      pass: 'ygopknvygivetoit',
    },
  });

  const mailOptions = {
    from: 'contact.udstudio@gmail.com',
    to: 'contact.udstudio@gmail.com',
    subject: 'Received a new Request',
    text: `Services: ${services.join(', ')}\nDate: ${date}\nPhone Number: ${phoneNumber}\nAddress: ${address}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Form submitted successfully!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
