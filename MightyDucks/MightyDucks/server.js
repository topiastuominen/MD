const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb+srv://admin:<password>@cluster0.mongodb.net/team-building?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

const SubmissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    answer: String,
    timestamp: { type: Date, default: Date.now }
});

const Submission = mongoose.model('Submission', SubmissionSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
    try {
        const submission = new Submission(req.body);
        await submission.save();
        res.status(200).send('Submission saved to database!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving submission');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://127.0.0.1:5500/`));


