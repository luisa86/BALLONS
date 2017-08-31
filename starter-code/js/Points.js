function Points(topPosition, width, height, color, borderRadius, container) {
  this.topPosition = topPosition;
  this.width = width;
  this.height = height;
  this.color = color;
  this.borderRadius = borderRadius;
  this.$container = container;
}

Points.prototype.createBubble= function () {
  var $points = $('<div>').attr('class', 'points');
  $points.css({
    'position': 'relative',
    'top': this.topPosition,
    'width': this.width,
    'height': this.height,
    'background-color': this.color,
    'border-radius': this.borderRadius
  });
  $('#container').append($points);
};
