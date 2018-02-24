

// help-intent.js
// Purpose: a function that handles the help intent
module.exports = helpIntent

function helpIntent () {
  this.emit(':ask', 'You can say Alexa, ask drink selector what my next drink is', 'What are you doing? Ask me what your drink should be. Say Alexa, what is my next drink')
}
