function BubbleGame(questionsPackage){
  this.questions = questionsPackage;
  this.selectedQuestion = "";
  this.changeActualQuestion();
}

BubbleGame.prototype.changeActualQuestion = function(){
  this.selectedQuestion = _.sample(this.questions);
};

BubbleGame.prototype.getQuestion = function () {
  return this.selectedQuestion.question;
};

BubbleGame.prototype.getAnswers = function () {
  return this.selectedQuestion.answers;
};

BubbleGame.prototype.getType = function () {
  return this.selectedQuestion.type;
};

BubbleGame.prototype.testAnswer = function(number){
  if(this.selectedQuestion.answer[number-1].correct){
    console.log('Dice Luisa que es correcto');
  } else {
    console.log('Que no, que me agobio...');
  }
};
