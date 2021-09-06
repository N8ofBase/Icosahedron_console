const Hero = require('../hero.js');
const Loot = require('../loot.js');
const Ability = require('../ability.js');
const Being = require('../being.js');

describe("Hero class", function() {

    let overpower = new Ability('Overpower', 'Powerful strike that pushes a rival back', Math.floor(Math.random()*8) + 1, 2);
    let radiantStrike = new Ability('Radiant Strike', 'Bright flash of light burns rival', Math.floor(Math.random()*6) + 1 + Math.floor(Math.random()*6) + 1, 3);
    let shieldSlam = new Ability('Shield Slam', 'Quickly slam a rival with a shield', Math.floor(Math.random()*8) + 1, 2);
    let heal = new Ability('Heal', 'Restore life', Math.floor(Math.random()*6) + 1, 2);
    let wood = new Loot('Wood', 'Hard piece of wood', 1);
    let hide = new Loot('Hide', 'Thick skin of an animal', 1);
    let hero = new Hero('Champion', 'champion', 42, 42, 10, 15, 10, 1, 1, 6, overpower, radiantStrike, shieldSlam, heal, [wood]);
    let rival = new Being('Champion', 'champion', 42, 42, 3, 10, 3, 1, 1, 6, [wood, hide]);

  it('should inherit all aspects from Being class', function() {
    let hero = new Hero('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6);
    expect(hero).toEqual(jasmine.any(Hero));
  });

  it('should have an attackAbility, magicAbility, speedAbility, and charmAbility', function() {

    expect(hero.charmAbility == heal).toBeTrue();
  })

  // it('should be able to use aAbility() to decrease rival health on hit', function(){
    
  //   hero.aAbility(rival);
  //   expect(rival.life < rival.maxLife).toBeTrue();
  // })

  // it('should be able to use mAbility() to effect rival and/or hero', function(){
    
  //   hero.mAbility(rival);
  //   expect(rival.life < rival.maxLife).toBeTrue();
  // })

  // it('should be able to use sAbility() to effect rival and/or hero', function(){
    
  //   hero.sAbility(rival);
  //   expect(rival.life < rival.maxLife).toBeTrue();
  // })

  it('should be able to loot() a rivals pack to take their stuff.', function() {

    hero.loot(hero, rival);

    expect(hero.pack.length).toEqual(2);
  });

  it('should check hero pack for loot() items and increase quantity if present', function() {
    
    hero.loot(hero,rival);
    
    expect(hero.pack[0].quantity).toEqual(2);
    expect(rival.pack.length).toEqual(0);
    
  })

  it('should be able to do a successful search() if above a 10', function() {
    let hero = new Hero('Champion', 'champion', 42, 42, 3, 15, 3, 1, 10, 6, ['wood', 'jeewa']);

    expect(hero.search(hero)).toEqual('found');
  });


})