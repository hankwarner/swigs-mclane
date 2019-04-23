// Twit config
const Twit = require('twit');

const twitterApiCallParams = {
    q: 'banana since:2011-07-11',
    count: 10       
}

var twitterFeed = new Twit({
    consumer_key: process.env.REACT_APP_TWITTER_API_KEY,
    consumer_secret: process.env.REACT_APP_TWITTER_API_SECRET,
    access_token: process.env.REACT_APP_TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET,
    user_id: 160657311,
    screen_name: 'suavo33'
})

module.exports = {
    getTweetsByUser(req, res) {
        twitterFeed.get('statuses/user_timeline', twitterApiCallParams, (err, data, response) => {
            res.json(data);
        });
    }
}
