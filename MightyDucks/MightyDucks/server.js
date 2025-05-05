import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const formData = req.body;

    // Append to a file or store in DB here
    fs.appendFile('submissions.json', JSON.stringify(formData) + '\n', (err) => {
        if (err) {
            return res.status(500).send('Error saving data');
        }
        res.send('Data saved!');
    });
});

app.listen(port, () => console.log(`Server running at http://localhost://127.0.0.1:5500/}`));
// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//
