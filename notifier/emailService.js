const nodemailer=require('nodemailer')
const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
        user: 'sharad.patels03@gmail.com',
        pass: 'tvuxylbhsovuhhdj',
    },
    secure: true,
});
module.exports=transporter

// const mailData = {
//     from: 'crm-notification-service@gmail.com',
//     to: 'notificationservice03@gmail.com',//hello123
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!',
//     html: '<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>',
// };
// transporter.sendMail(mailData, function (err, info) {
//     if (err)
//         console.log(err)
//     else
//         console.log(info);
// });