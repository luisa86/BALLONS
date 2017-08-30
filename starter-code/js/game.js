var game;
var bubble;

$(document).ready(function() {
  var $container = $('#container');
  game = new BubbleGame(questions);
  bubble = new Bubble(400, 40, 40, "coral", $container);

  var $question = $('<div>').attr('class', game.getType()).text(game.getQuestion());
  $container.append($question);

  var $answersContainer = $('<div>').attr('class', 'options');
  game.getAnswers().forEach(function(answer) {
    var $option = $('<p>').attr('result', answer.correct).text(" * " + answer.option);
    $answersContainer.append($option);
  });

  $container.append($answersContainer);

  $("p").on("click", (function() {
    var res = $(this).attr('result');
  }));

  var $move = function () {
    setInterval (function(){
      bubble.move();
    },3000);
  };

});
