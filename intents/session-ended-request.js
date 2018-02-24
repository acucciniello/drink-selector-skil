
// session-ended-request.js
// Purpose: End the Skill and the session
module.exports = sessionEndedRequest

// Purpose: End the Skill and the session
function sessionEndedRequest () {
  this.emit(':tell', 'Dam, you are gonna back out of taking a drink? You better hope no one else is here to see you')
}
