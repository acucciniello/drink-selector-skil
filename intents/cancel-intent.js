// cancel-intent.js
// Purpose: a function that handles the cancel intent
module.exports = cancelIntent

// Purpose: To cancel the skill and close the session
function cancelIntent () {
  this.emit(':tell', 'Dam, you are gonna back out of taking a drink? You better hope no one else is here to see you')
}
