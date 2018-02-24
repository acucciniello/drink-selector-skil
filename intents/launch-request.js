// Purpose: An Intent Function to start the skill
module.exports = LaunchRequest

function LaunchRequest () {
  this.emit(':ask', "<audio src='https://s3.amazonaws.com/minority-mindset-skill/minority-mindset-skil.mp3' />")
}
