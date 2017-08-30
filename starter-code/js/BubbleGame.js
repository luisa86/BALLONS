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



  // BubbleGame.prototype.comparateAnswer = function () {
  //   var comparate = function () {
  //     if()
  //   };
  // };
