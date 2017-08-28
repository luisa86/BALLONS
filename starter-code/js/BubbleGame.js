function BubbleGame(questionsPackage){
  this.questions = questionsPackage;
}

BubbleGame.prototype.showQuestion = function(){
  var question = _.sample(questions);
};
