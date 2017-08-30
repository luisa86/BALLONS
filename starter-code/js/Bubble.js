function Bubble(topPosition, width, height, color, $container) {
  this.topPosition = topPosition;
  this.width = width;
  this.height = height;
  this.color = color;
  this.initRender($container);
}

Bubble.prototype.initRender = function($container) {
  var $bubble = $('<div>').attr('class', 'pop');
  $bubble.css({
    'position': 'relative',
    'top': this.topPosition,
    'width': this.width,
    'height': this.height,
    'background-color': this.color
  });
  $container.append($bubble);
};

Bubble.prototype._topBubble = function() {
  this.topPosition = this.topPosition - 10;
};

Bubble.prototype._paintBubble = function() {
  $('.pop').css("top", this.topPosition);
};

Bubble.prototype.move = function () {
  this._topBubble();
  this._paintBubble();
};

Bubble.prototype._widthBubble = function() {
  this.width = this.width + 20;
};

Bubble.prototype._paintWidthBubble = function() {
  $('.pop').css("width", this.width);
};

Bubble.prototype._heightBubble = function() {
  this.height = this.height + 20;
};

Bubble.prototype._paintHeightBubble = function() {
  $('.pop').css("height", this.height);
};

Bubble.prototype.size = function () {
  this._widthBubble();
  this._paintWidthBubble();
  this._heightBubble ();
  this._paintHeightBubble();
};

Bubble.prototype.exploit = function () {
    this.move();
    this.size();
};
