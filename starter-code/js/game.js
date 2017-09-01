var game;
var bubble;

var assignature;
var $container;
var $question;
var $pop = $('.pop');
var points;

function initGame() {
  $container = $('<div>').attr('id', 'container');
  $('body').prepend($container);
  assignature = new Assignature();
  game = new BubbleGame(questions);
  points = new Points (200, 50, 50, 'red', 30, $('#container'));
  assignature.init();
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
      newQuestion();
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
  bubble = new Bubble(400, 150, 150, 'lightpink', 100, $container);
    var move = function () {
    setInterval (function(){
     bubble.exploit();
    },60);
   };
}

function newQuestion(){
  game.changeActualQuestion();
  deletePreviousQuestion();
  animateAssignature();
  printQuestion();
  printAnswers();
  printRespuest();
  starBubble();
}

$(document).ready(function() {

  initGame();

  $("button").on("click", function() {
    newQuestion();
  });
});
