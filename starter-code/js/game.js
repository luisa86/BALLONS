var game = new BubbleGame(questions);

$(document).ready(function() {
  var $container = $('#container');
  var $question = $('<div>').attr('class', game.getType()).text(game.getQuestion());
  $container.append($question);

  var $answer =
  var $answers = $('<div>').attr('class', 'options');
  game.getAnswers().forEach(function(answer){
    var $respuestas = $('<p>').attr('class', 'correct').text("1. " + answer.option);
    $answers.append($respuestas);
    

  });
  $container.append($answers);
  $("p").on("click",(function(){
    console.log("hola soy luisi");
  }));
});
