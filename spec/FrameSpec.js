'use strict';

describe ('One frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('has 10 pins by default', function(){
    expect(frame.pins).toEqual(10);
  });

  describe('Rolls', function(){
    it('has a first roll', function(){
      expect(frame.firstRoll()).toBeTruthy();
    });
    it('has a second roll', function(){
      expect(frame.secondRoll()).toBeTruthy();
    });
    it('condition to roll', function(){
      expect(frame.conditionToRoll()).toBeTruthy();
    });
  });

  describe('Next frame', function(){
    it('sets a new frame', function(){
      newFrame = new Frame();
      expect()
    });
  });
});
