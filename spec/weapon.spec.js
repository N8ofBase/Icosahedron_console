const Weapon = require('../weapon.js')
const Champion = require('../champion.js')

describe("Weapon class", function() {
  it('should extend constructor of Loot class', function() {
    let broadsword = new Weapon('Broadsword', 'Sturdy and versitile. Pairs well with a shield', 1, Math.floor(Math.random()*6) + 1);

    expect(broadsword).toEqual(jasmine.any(Weapon));
  });

  it('damage should equal a random number from 1 to 6', function() {
    let broadsword = new Weapon('Broadsword', 'Sturdy and versitile. Pairs well with a shield', 1, Math.floor(Math.random()*6) + 1);

    let hero = new Champion('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, broadsword);

    expect(hero.weapon.damage < 7).toBeTrue();
  })

  
})