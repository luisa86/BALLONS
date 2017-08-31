var game;
var bubble;
var assignature;
var $container;

function initGame(){
  $container = $('<div>').attr('id', 'container');
  $('body').prepend($container);
  assignature = new Assignature();
  assignature.init();
  game = new BubbleGame(questions);
}

function animateAssignature(){
  var type = game.getType();
  var $typeAssignature = $('#assignature .' + type);
  $typeAssignature.addClass('active');

}

$(document).ready(function() {

  initGame();

  $("button").on("click", function() {
    game.changeActualQuestion();
    animateAssignature();
  });

  // game = new BubbleGame(questions);
  // bubble = new Bubble(400, 150, 150, "coral", 100, $container);
  // var $pop = $('.pop');
  //
  // var $question = $('<div>').attr('class', game.getType()).text(game.getQuestion());
  // $pop.append($question);
  //
  //
  // var $answersContainer = $('<div>').attr('class', 'options');
  // game.getAnswers().forEach(function(answer) {
  //   var $option = $('<p>').attr('result', answer.correct).text(" * " + answer.option);
  //   $answersContainer.append($option);
  // });
  //
  // $container.append($answersContainer);
  //
  // $("p").on("click", (function() {
  //   var res = $(this).attr('result');
  //   if ( res == "true"){
  //     console.log("IS CORRECT!!!!");
  //   }else {
  //     console.log("HAS LOST!!!!");
  //   }
  // }));
  //
  // $("button").on("click", (function() {
  //   game.getQuestion();
  //   game.getAnswers();
  //   move();
  // }));
  //
  // var move = function () {
  //   setInterval (function(){
  //     bubble.exploit();
  //   },60);
  // };

});
