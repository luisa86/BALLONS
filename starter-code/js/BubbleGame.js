function BubbleGame(questionsPackage){
  this.questions = questionsPackage;
  this.selectedQuestion = "";
}

BubbleGame.prototype.showQuestion = function(){
  this.selectedQuestion = _.sample(this.questions);
  console.log('QUESTION : ' + this.selectedQuestion.question);
  console.log('POSSIBLE ANWERS: ');
  this.selectedQuestion.answer.forEach(function(answer, index){
    console.log(index+1 + '. ' + answer.option);
  });
};

BubbleGame.prototype.testAnswer = function(number){
  if(this.selectedQuestion.answer[number-1].correct){
    console.log('Dice Luisa que es correcto');
  } else {
    console.log('Que no, que me agobio...');
  }
};
