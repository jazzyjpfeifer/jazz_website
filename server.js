const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const router = express.Router();
const cors = require('cors');
const {google} = require('googleapis');
const fs = require('fs');
const moment = require('moment');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use("/", router);


const port = 5000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

/* Email Transporter */

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
    let email = req.body.email
    let subject = name
    let message = req.body.message

    const mailOptions = {
        to: process.env.EMAIL,
        from: email,
        subject: subject,
        text: message
    }

    console.log(mailOptions);

    transporter.sendMail(mailOptions, (err) => {
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





/* Google Calendar Load */
const TOKEN_PATH = 'token.json';

fs.readFile('credentials.json', (err,content) => {
    if(err)
        return console.log('Error loading client secret file', err);
    authorize(JSON.parse(content), listEvents);
})

function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}


function listEvents(auth) {
    const calendar = google.calendar({version: 'v3', auth});

    calendar.events.list({
        calendarId: 'primary'
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length) {
            const calendar_data = [];
            //console.log('Upcoming Gigs:');
            events.map((event, i) => {
                const calendar_events = {  "id": event.id,
                                           "event_name":  event.summary,
                                           "event_start_time": event.start.dateTime,
                                           "event_end_time": event.end.dateTime,
                                           "start_time":moment(event.start.dateTime).format('h:mm A'),
                                           "end_time":moment(event.end.dateTime).format('h:mm A'),
                                           "event_date_formatted": moment(event.start.dateTime).format('MMMM Do YYYY'),
                                           "event_date": moment(event.start.dateTime).format('YYYY-MM-DD'),
                                           "month_name": moment(event.start.dateTime).format('MMMM'),
                                           "month": moment(event.start.dateTime).format('M'),
                                           "location": event.location,
                                           "venue": event.description,
                                           "status": event.status};

              //  const calendar_data = (JSON.stringify(calendar_events, null, 2));
                calendar_data.push(calendar_events)
             });
            console.log(calendar_data)
            //write the file
            fs.writeFile('../jazz_website/client/src/assets/events.json', JSON.stringify(calendar_data, null, 2), err => {
                if(err) {
                    console.log(err)
                } else {
                    console.log('File written successfully')
                }
            });


         } else {
             console.log('No upcoming events found.');
         }
    });

    //get request to write calendar events to json file

    router.get('/', (req, res) => {
        res.send("Calendar data has refreshed");
        listEvents(auth);
    })


}
