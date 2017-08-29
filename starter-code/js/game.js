var game = new BubbleGame(questions);

$(document).ready(function() {
  var $container = $('#container');
  var $question = $('<div>').attr('class', game.getType()).text(game.getQuestion());
  $container.append($question);

  var $options = $('<div>').attr('')
});
