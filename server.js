require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const singles = require('./routes/api/singles');
const albums = require('./routes/api/albums');
const twitter = require('./routes/api/twitter');

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = process.env.MONGO_DB_KEY;
const options = {
    useNewUrlParser: true
}

// Connect to Mongo
mongoose.connect(db, options)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/singles', singles);
app.use('/api/albums', albums);
app.use('/api/twitter', twitter);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
