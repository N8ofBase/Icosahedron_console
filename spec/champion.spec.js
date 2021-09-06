const Champion = require('../champion.js');
const Ability = require('../ability.js');
const Loot = require('../loot.js');
const Hero = require('../hero.js');
const Being = require('../being.js');
describe("Champion class", function() {

    let overpower = new Ability('Overpower', 'Powerful strike that pushes a rival back', Math.floor(Math.random()*8) + 1, 2);
    let radiantStrike = new Ability('Radiant Strike', 'Bright flash of light burns rival', Math.floor(Math.random()*6) + 1 + Math.floor(Math.random()*6) + 1, 3);
    let shieldSlam = new Ability('Shield Slam', 'Quickly slam a rival with a shield', Math.floor(Math.random()*8) + 1, 2);
    let heal = new Ability('Heal', 'Restore life', Math.floor(Math.random()*6) + 1, 2);
    let wood = new Loot('Wood', 'Hard piece of wood', 1);
    let hide = new Loot('Hide', 'Thick skin of an animal', 1);
    let hero = new Champion('Champion', 'champion', 42, 42, 10, 15, 10, 10, 1, 6, overpower, radiantStrike, shieldSlam, heal, [wood]);
    let rival = new Being('Champion', 'champion', 42, 42, 3, 10, 3, 1, 1, 6, [wood, hide]);
    

it("should inherit all aspects from Being class", function(){
  
    expect(hero).toEqual(jasmine.any(Champion));
})

it('should be able to effect rival with overpower()', function(){
  hero.overpower(rival);
  expect(rival.life < rival.maxLife).toBeTrue();
})

it('should be able to effect rival with radiantStrike()', function(){
  hero.radiantStrike(rival);
  expect(rival.life < rival.maxLife).toBeTrue();
})

it('should be able to effect rival with shieldSlam()', function(){
  hero.shieldSlam(rival);
  expect(rival.life < rival.maxLife).toBeTrue();
})

it('should be able to restore life with heal()', function(){

  hero.heal(hero);
  expect(hero.life).toEqual(hero.maxLife);
})

})