function Bubble(topPosition, width, height, color, borderRadius, $container) {
  this.topPosition = topPosition;
  this.width = width;
  this.height = height;
  this.color = color;
  this.borderRadius = borderRadius;
  this.initRender($container);
}

Bubble.prototype.initRender = function($container) {
  var $bubble = $('<div>').attr('class', 'pop');
  $bubble.css({
    'position': 'absolute',
    'top': this.topPosition,
    'width': this.width,
    'height': this.height,
    'background-color': this.color,
    'border-radius': this.borderRadius
  });
  $container.append($bubble);
};

Bubble.prototype._topBubble = function() {
  this.topPosition = this.topPosition - 2;
};

Bubble.prototype._paintBubble = function() {
  $('.pop').css("top", this.topPosition);
};

Bubble.prototype.move = function () {
  this._topBubble();
  this._paintBubble();
};

Bubble.prototype._widthBubble = function() {
  this.width = this.width + 1;
};

Bubble.prototype._heightBubble = function() {
  this.height = this.height + 1;
};

Bubble.prototype._border = function(){
  this.borderRadius = this.borderRadius + 5;
};

Bubble.prototype._paintWidthBubble = function() {
  $('.pop').css("width", this.width);
};

Bubble.prototype._paintHeightBubble = function() {
  $('.pop').css("height", this.height);
};

Bubble.prototype._paintborder = function() {
  $('.pop').css("border-radius", this.borderRadius);
};

Bubble.prototype.size = function () {
  this._widthBubble();
  this._paintWidthBubble();
  this._heightBubble ();
  this._paintHeightBubble();
  this._border();
  this._paintborder();
};

Bubble.prototype.exploit = function () {
    this.size();
    this.move();
};
