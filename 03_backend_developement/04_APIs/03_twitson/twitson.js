const OAuthObj = require("OAuth");
const request = require("request");

const oauth = new OAuthObj.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);


function checkAccount(accountToCheck) {

  const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";
  oauth.get(url + accountToCheck, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
    if (error) {
      console.log(error);
    }
    else {
      const text = JSON.parse(data).map(
        function (tweet) {
            tweetRequest=tweet.text;
            return tweetRequest;
          }

          //return
        );
        const textFlatten = text.join("");
        requestWatson(accountToCheck,textFlatten)

    }
    //return text;
  });
}

function requestWatson (account, textFromTwitter) {
  // Replace string with correct credentials
  const username = process.env.WATSON_USERNAME;
  const password = process.env.WATSON_KEY;
  const urlWatson = process.env.WATSON_URL;
  const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  //const text = tweetRequest;
  const uri = encodeURI(urlWatson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + textFromTwitter);

  request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
    console.log ("#############");
    console.log(account);
    console.log(JSON.parse(body).sentiment.document);
  });
}

checkAccount("EmmanuelMacron");
checkAccount("JLMelenchon");
