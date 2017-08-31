function Assignature(color, fontSize) {
  this.color = color;
  this.fontSize = fontSize;
}

Assignature.prototype.init = function () {
  var $assignature = $('<div>').attr('id', 'assignature');
  var $math = $('<div>').attr('class', 'math').text('math');
  var $english = $('<div>').attr('class', 'english').text('english');
  var $sciencie = $('<div>').attr('class', 'sciencie').text('sciencie');
  var $geography = $('<div>').attr('class', 'geography').text('geography');

  $assignature.append($math);
  $assignature.append($english);
  $assignature.append($sciencie);
  $assignature.append($geography);

  $('body').append($assignature);

};
