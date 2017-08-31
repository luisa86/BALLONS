var game;
var bubble;
var assignature;
var $container;
var $question;
var $pop = $('.pop');

function initGame() {
  $container = $('<div>').attr('id', 'container');
  $('body').prepend($container);
  assignature = new Assignature();
  assignature.init();
  game = new BubbleGame(questions);
}

function animateAssignature() {
  var type = game.getType();
  var $typeAssignature = $('#assignature .' + type);
  $typeAssignature.addClass('active');
  // $typeAssignature.removeClass('active');
}

function printQuestion() {
  var $question = $('<div>').attr('class', game.getType()).text(game.getQuestion());
  ($container).append($question);
}

function printAnswers() {
  var $answersContainer = $('<div>').attr('class', 'options');
  game.getAnswers().forEach(function(answer) {
    var $option = $('<p>').attr('result', answer.correct).text(" * " + answer.option);
    $answersContainer.append($option);
    $container.append($answersContainer);
  });
}

function printRespuest() {
  $("p").on("click", (function() {
    var res = $(this).attr('result');
    if (res == "true") {
      alert("IS CORRECT!!!!");
    } else {
      alert("HAS LOST!!!!");
    }
  }));
}

$(document).ready(function() {

  initGame();

  $("button").on("click", function() {
    game.changeActualQuestion();
    animateAssignature();
    printQuestion();
    printAnswers();
    printRespuest();
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
  //     alert("IS CORRECT!!!!");
  //   }else {
  //     alert("HAS LOST!!!!");
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
