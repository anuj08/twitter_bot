console.log('The replier bot is starting');;
var Twit = require('twit')
var config = require('./config');
var T = new Twit(config);

function tweetIt(txt){

var twits =  { status: txt };

T.post('statuses/update',twits, twitted);

function twitted(err,data, response){
  if(err){
    console.log("Something went wrong");
  }
  else{
    console.log('It worded!');
  }
}
}

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
// var params =
//    { q: 'hello since:2017-07-31',
//     count: 100
//   };
//   function gotData(err, data, response){
// var twits = data.statuses;
// for(var i = 0;i < twits.length; i++){
//   console.log(twits[i].text);
// }
//   }
// T.get('search/tweets',params, gotData)

var stream = T.stream('user');
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){
var replyto = eventMsg.in_reply_to_screen_name;
var text = eventMsg.text;
var from = eventMsg.user.screen_name;
console.log(replyto + ' ' +from);
if(replyto ==='pk47bITP'){
  var newtweet = '@'+from+ ' thank you for tweeting me!' + replyto;
  tweetIt(newtweet);
}
  // var fs = require('fs');
  // var json = JSON.stringify(eventMsg, null, 2);
  // fs.writeFile("tweet.json", json);
}
