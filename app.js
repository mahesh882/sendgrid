// const sendgrid = require('@sendgrid/mail');

 const SENDGRID_API_KEY = "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"

// sendgrid.setApiKey(SENDGRID_API_KEY)

// const msg = {
//   to: 'mt.sparkle031@gmail.com', // Change to your recipient
//   from: 'mt.sparkle031@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid Is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }

// sendgrid
//   .send(msg)
//   .then((resp) => {
//     console.log('Email sent\n', resp)
//   })
//   .catch((error) => {
//     console.error(error)
// })
// var sendgrid = require("sendgrid-v3-node")

// const mailOptions = {
//     sendgrid_key: SENDGRID_API_KEY,
//     from_email: 'discussionforall@gmail.com',
//     from_name: 'FROM_NAME',
//     to: ['mt.sparkle031@gmail.com']
// };

// mailOptions.subject = 'SUBJECT';
// mailOptions.content = 'CONTENT';
// sendgrid.send_via_sendgrid(mailOptions).then(response => {
//     console.log(response);
// });
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'mt.sparkle031@gmail.com',
  from: 'discussionforall@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
  .send(msg)
  .then((res) => { console.log(res)}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();