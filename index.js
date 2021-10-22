// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  from: process.env.FROM,
  templateId: process.env.SENDGRID_TEMPLATE_ID,
  personalizations: [
    {
      to: process.env.TO,
      dynamicTemplateData: {
        greeting: "Hello, World!",
      },
    },
  ],

  subject: "Sending with SendGrid is Fun Again",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do <em>anywhere</em>, even with Node.js</strong>",
};

console.log(process.env.SENDGRID_API_KEY);
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
    console.dir(error.response.body.errors);
  });
