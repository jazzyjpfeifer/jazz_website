const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const router = express.Router();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use("/", router);


const port = 5000;



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})



let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
    },
});


transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`*** Server is ready to take messages: ${success} ***`);
});

router.post('/contact', (req, res) => {
    console.log("Getting Post from contact form");
    let name = req.body.name
    let subject = req.body.subject
    let message = req.body.message

    let mail = {
        from: name,
        to: process.env.EMAIL,
        subject: subject,
        text: message
    }

    transporter.sendMail(mail, (err) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

const calender = [
    {calendarId: "jazzyjpianoman@gmail.com"}
]



