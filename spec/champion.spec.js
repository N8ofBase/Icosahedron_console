const Champion = require('../champion.js');
describe("Champion class", function() {

it("should inherit all aspects from Being class", function(){
  let player = new Champion('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 'broadsword');
    expect(player).toEqual(jasmine.any(Champion));
})
})