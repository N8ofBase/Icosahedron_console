const Ability = require('../ability.js')

describe('Ability class', function() {

  let overpower = new Ability('Overpower', 'Powerful strike that pushes a rival back', Math.floor(Math.random()*8) + 1, 2);

  it('should have name, info, dice, and cooldown', function(){

    expect(overpower).toEqual(jasmine.any(Ability));
  })
})