const Being = require('../being.js');

describe("Being class", function(){

  it("constructor sets name, title, life, attack, defense, magic, speed, charm, weapon", function() {
    let hero = new Being('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6);
    expect(hero).toEqual(jasmine.any(Being));
   
  });

  it('decreases stat points with minusStat()', function() {
    let hero = new Being('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, Math.floor(Math.random()*6) +1);
    
    expect(hero.minusStat(hero.life, hero.weapon)).toEqual(42 - hero.weapon);

  });

  it('increases stat points with plusStat()', function() {
    let hero = new Being('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6);
    let healing = Math.floor(Math.random()*4) +1;
    expect(hero.plusStat(hero.charm, healing)).toEqual(hero.charm + healing);
  });

  it('checks life with iDie() returning "Game Over" if life is 0', function(){
    let hero = new Being('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6);
    hero.life = 0;
    expect(hero.iDie(hero.life)).toEqual("Game Over");
  });

  it('removes life from target with attackRival()', function () {
    let hero = new Being('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6);
    let rival = new Being('Rival', 'rival', 25, 25, 2, 0, 2, 2, 1, 4);
    hero.attackTarget(hero, rival);
  
    expect(rival.life < rival.maxLife).toBeTrue();
  });

  it('should roll D20 + attack and compare that to rival defense. If greater, do damage, if less, return "Miss!"', function () {
    let hero = new Being('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6);
    let rival = new Being('Rival', 'rival', 25, 25, 2, 30, 2, 2, 1, 4);
    
    hero.attackTarget(hero, rival);
  
    expect(rival.life == rival.maxLife).toBeTrue();
  });

  it("should have an orderRoll() to determine the turn order.", function() {
    let hero = new Being('Champion', 'champion', 42, 42, 3, 15, 3, 10, 1, 6);
    expect(hero.orderRoll(hero) > 10).toBeTrue();
  });

  
});

