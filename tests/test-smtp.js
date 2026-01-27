require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

transporter.sendMail({
  from: 'sender@example.com',
  to: 'test@mailtrap.com',
  subject: 'SMTP Test Email',
  text: 'This is a test email to verify SMTP configuration.'
}, (error, info) => {
  if (error) {
    console.error('Failed to send email:', error.message);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  }
});
