// Twit config
const Twit = require('twit');
const keys = require('../config/keys');

const twitterApiCallParams = {
    q: 'banana since:2011-07-11',
    count: 10       
}

var twitterFeed = new Twit({
    consumer_key: keys.twitterApiKey,
    consumer_secret: keys.twitterApiSecret,
    access_token: keys.twitterAccessToken,
    access_token_secret: keys.twitterAccessTokenSecret,
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
