// stop-intent.js
// Purpose: a function that handles the cancel intent
module.exports = stopIntent

// Purpose: To stop the skill and close the session
function stopIntent () {
  this.emit(':tell', 'Dam, you are gonna back out of taking a drink? You better hope no one else is here to see you')
}
