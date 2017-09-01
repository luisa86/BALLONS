
function Game(lives){
  this.lives = lives;
  this.score = 0;
  this.gameElement = $('#gameHolder');
  this.scoreEl = $('<div class="score">');
  this.gameElement.append(this.scoreEl);
  this.livesHolder = $('<div class="lives">');
  this.gameElement.append(this.livesHolder);
  this.refreshScore();
  this.refreshLives();
  this.generateQuestion();
}

Game.prototype.refreshScore = function(){
  this.scoreEl.text(this.score + " puntos");
};

Game.prototype.refreshLives = function(){
  this.livesHolder.empty();
  for(var i=0; i<this.lives; i++){
    this.livesHolder.append($('<div class="live">'));
  }
};

Game.prototype.generateQuestion = function(){
  // Elimina la pregunta actual si hubiese una
  if(this.currentQ){
    this.currentQ.element.remove();
  }
  // Genera y muestra una nueva pregunta
  this.currentQ = new Question(this);
};

Game.prototype.ready = function(valid){
  if(valid){
    this.score += 10;
    console.log("La respuesta es valida");
  }else{
    this.score -= 5;
    console.log("La respeusta es invalida, prueba otra vez");
    this.lives--;
    this.refreshLives();
  }

  this.refreshScore();
  this.generateQuestion();
};


/*var game;
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
  points = new Points (350, 50, 50,'red', 30, $('#container'));
  assignature.init();
}

function animateAssignature() {
  $('.active').removeClass('active');
  var type = game.getType();
  var $typeAssignature = $('#assignature .' + type);
  $typeAssignature.addClass('active');
}

function printQuestion() {
  starBubble();
  var $question = $('<div>').attr('class', game.getType()).text(game.getQuestion());
  ($container).append($question);
}

function printAnswers() {
  var $answersContainer = $('<div>').attr('class', 'options');
  game.getAnswers().forEach(function(answer) {
    var $option = $('<p>').attr('result', answer.correct).text(answer.option);
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
}*/
