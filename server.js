const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const singles = require('./routes/api/singles');
const albums = require('./routes/api/albums');
const twitter = require('./routes/api/twitter');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/singles', singles);
app.use('/api/albums', albums);
app.use('/api/twitter', twitter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
