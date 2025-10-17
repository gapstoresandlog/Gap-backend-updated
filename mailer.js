const nodemailer = require('nodemailer');
const FROM = process.env.DEFAULT_FROM_EMAIL || process.env.SMTP_USER;
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
async function sendMail(to, subject, text, html) {
  const info = await transporter.sendMail({ from: FROM, to, subject, text, html });
  return info;
}
module.exports = { sendMail };
