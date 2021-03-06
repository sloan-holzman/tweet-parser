// ENV
require('dotenv').config();

const {
  NODE_ENV, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_SECRET
} = process.env;

module.exports = {
  NODE_ENV,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_SECRET
};
