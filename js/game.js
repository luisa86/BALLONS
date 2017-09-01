
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
  // this.gameOver();
}

Game.prototype.refreshScore = function(){
  this.scoreEl.text(this.score + "puntos");
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
    console.log("La respuesta es invalida, prueba otra vez");
    this.lives--;
    this.gameOver();
    this.refreshLives();

  }


  this.refreshScore();
  this.generateQuestion();
};

 Game.prototype.gameOver = function(){
    var lost = $('<div class="lost">');
  if (this.lives === 0) {
       lost.append($('<img src="images/gameover.gif" width=100px >'));
      alert("HAS LOST!!!!");
  }
 };
