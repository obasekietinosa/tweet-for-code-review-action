const core = require('@actions/core');
const github = require('@actions/github');
const Twit = require('twit');

try {
  // `who-to-greet` input defined in action metadata file
  const apiKey = core.getInput('api-key').split(';');
  
  var T = new Twit({
    consumer_key: apiKey[0],
    consumer_secret: apiKey[1],
    access_token: apiKey[2],
    access_token_secret: apiKey[3],
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
  })

  const actionUrl = `https://github.com/${github.context.repo.owner}/${github.context.repo.repo}`;

  const tweetBody = `${core.getInput('tweet-body')} ${actionUrl}`;

  T.post('statuses/update', { status: tweetBody }, function(err, data, response) {
    console.log(data)
  })
} catch (error) {
  core.setFailed(error.message);
}