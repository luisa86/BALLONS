function Question(parent){
  this.parent = parent;
  this.element = $('<div>').addClass('question');
  parent.gameElement.append(this.element);

  this.question = _.sample(questionsList);

  // Creamos el elemento dom de la pregunta
  var pregunta = $('<h2>').text(this.question.question);
  this.element.append(pregunta);

  // Creamos los elementos del dom de la respuesta
  var listaRespuestas = $('<ul>');
  for(var i=0; i < this.question.answers.length; i++){
    var letra = String.fromCharCode(65+i);

    var answerEl = $('<li>')
                    .html( "<b>" + letra + ":</b> " + this.question.answers[i].option)
                    .attr('data-correct',this.question.answers[i].correct);
    var that = this;
    answerEl.click(function(e){
        var validValue = ($(this).attr('data-correct') == 'true');
        that.callParent(validValue);
    });
    listaRespuestas.append(answerEl);
  }
  this.element.append(listaRespuestas);
}

Question.prototype.callParent = function(valid){
  var elementRespuesta = $('<div class="overlap">');
  if(valid){
    elementRespuesta.append($('<img src="images/correct.png" width=100>'));
  }else{
    elementRespuesta.append($('<img src="images/incorrect.png" width=100>'));
  }
  this.element.append(elementRespuesta);
  var that = this;
  setTimeout(function(){
    elementRespuesta.remove();
    that.parent.ready(valid);
  },1500);
};
