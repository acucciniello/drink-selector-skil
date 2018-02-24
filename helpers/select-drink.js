module.exports = selectDrinks

const START_NUM = 0
const END_NUM = 100
const BEER = 30
const SHOT = 70
const SHOT_O_CLOCK = 75
const audioData = require('../helpers/audio-data.json')

function selectDrinks () {
  var drinkResponse = ''
  var randomNum = getRandomInt(START_NUM, END_NUM)
  if (randomNum < BEER) {
    drinkResponse = audioData.beer.audio + audioData.beer.alexa
  } else if (randomNum < SHOT && randomNum >= BEER) {
      drinkResponse = audioData.shot.audio + audioData.shot.alexa
  } else if (randomNum < SHOT_O_CLOCK && randomNum >= SHOT) {
    drinkResponse = audioData.shotOClock.audio + audioData.shotOClock.alexa
  } else if (randomNum < END_NUM && randomNum >= SHOT_O_CLOCK) {
    drinkResponse = audioData.mystery.audio + audioData.mystery.alexa
  } else {
    drinkResponse = 'We dont have a drink for you, you broke the wheel.  Good job'
  }
  return drinkResponse
}
