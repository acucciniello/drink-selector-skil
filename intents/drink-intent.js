module.exports = drinkIntent

const selectDrink = require('../helpers/select-drink.js')

function drinkIntent () {
  var drinkResponse = selectDrink()
  var reprompt = 'What are you doing? Ask me what your drink should be. Say Alexa, what is my next drink'
  this.response.speak(drinkResponse).listen(reprompt)
  this.emit(':responseReady')
}
