require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const path = require('path');
const routes = require('./routes');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = process.env.MONGO_DB_KEY;

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/.netlify/functions/server', routes);

// Use routes
// if (process.env.NODE_ENV === 'production') {
    // app.use('/.netlify/functions/api/singles', singles);
    // app.use('/.netlify/functions/api/albums', albums);
    // app.use('/.netlify/functions/api/twitter', twitter);

// } else if (process.env.NODE_ENV === 'development') {
//     app.use('../api/singles', singles);
//     app.use('../api/albums', albums);
//     app.use('../api/twitter', twitter);
// }

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     })
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// Lambda handler for Netlify
module.exports.handler = serverless(app);
