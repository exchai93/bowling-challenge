'use strict';

function Frame(){
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
  this.rolls = [1, 2];
  this.rollIndex = 0;
  this.nextFrame
};

Frame.prototype.pins = function () {
  return this.pins;
};
Frame.prototype.firstRoll= function() {
  return this.rolls[0];
};

Frame.prototype.secondRoll = function () {
  return this.rolls[1];
};

Frame.prototype.conditionToRoll = function () {
  return (this.rollIndex < 2)
};

Frame.prototype.roll = function () {

};

Frame.prototype.setNextFrame = function(frame) {
  this.nextFrame = Frame;
  return frame;
};

Frame.prototype.nextFrame= function(frame) {
  return this.nextFrame;
};
