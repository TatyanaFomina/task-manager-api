const sgMail = require('@sendgrid/mail');



sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to:'vadymkorotkyi@gmail.com',
//     from:'vadymkorotkyi@gmail.com',
//     subject: 'This is from app',
//     text:'Hello, I sent you my email from Task App :)',
// });
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vadymkorotkyi@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the app, ${name}. For futher info contact us via this email :)`
    })
}

const sendCancelEmail = (email, name)=> {
    sgMail.send({
        to: email,
        from: 'vadymkorotkyi@gmail.com',
        subject: 'Thank you for being with us',
        text:`Hello, ${name}. Unfortunately, you deleted our Task App. Please rate us and give some information about pros and cons. Hope you will be back :)`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}