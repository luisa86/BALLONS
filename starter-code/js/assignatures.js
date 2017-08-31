function Assignature(color, fontSize) {
  this.color = color;
  this.fontSize = fontSize;
}

Assignature.prototype.init = function () {
  var $assignature = $('<div>').attr('id', 'assignature');
  var $math = $('<div>').attr('class', 'math').text('MATH');
  var $english = $('<div>').attr('class', 'english').text('ENGLISH');
  var $sciencie = $('<div>').attr('class', 'sciencie').text('SCIENCIE');
  var $geography = $('<div>').attr('class', 'geography').text('GEOGRAPHY');

  $assignature.append($math);
  $assignature.append($english);
  $assignature.append($sciencie);
  $assignature.append($geography);

  $('body').append($assignature);

};
