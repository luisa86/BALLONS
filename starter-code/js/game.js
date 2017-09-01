var game;
var bubble;

var assignature;
var $container;
var $question;
var $pop = $('.pop');
var points = new Points (200, 50, 50, 'rgb(255, 0, 0)', 30, $('#container'));

function initGame() {
  $container = $('<div>').attr('id', 'container');
  $('body').prepend($container);
  assignature = new Assignature();
  assignature.init();
  game = new BubbleGame(questions);
}

function animateAssignature() {
  $('.active').removeClass('active');
  var type = game.getType();
  var $typeAssignature = $('#assignature .' + type);
  $typeAssignature.addClass('active');
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
      points.createBubble();
    } else {
      alert("HAS LOST!!!!");
    }
  }));
}

function deletePreviousQuestion(){
  var $delete = $('#container').children();
  $delete.remove();
}

function starBubble(){
  bubble = new Bubble(400, 150, 150, 'rgba(229, 97, 211, 0.8)', 100, $container);
    var move = function () {
    setInterval (function(){
     bubble.exploit();
    },60);
   };
}

$(document).ready(function() {

  initGame();

  $("button").on("click", function() {
    game.changeActualQuestion();
    deletePreviousQuestion();
    animateAssignature();
    printQuestion();
    printAnswers();
    printRespuest();
    starBubble();
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
