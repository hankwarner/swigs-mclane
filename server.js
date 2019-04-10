const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const songs = require('./routes/api/songs');
const albums = require('./routes/api/albums');

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
app.use('/api/songs', songs);
app.use('/api/albums', albums);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
