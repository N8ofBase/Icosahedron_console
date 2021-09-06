const Cache = require('../cache.js');
const Loot = require('../loot.js');
const Hero = require('../hero.js');
describe("Cache class", function() {

    let wood = new Loot('Wood', 'Hard piece of wood', 1);
    let hide = new Loot('Hide', 'Thick skin of an animal', 1);
    let jeewa = new Loot('Jeewa Fruit', 'Sweet brown and juicy', 1)
    let hero = new Hero('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6);
    let rival = new Hero('Plague Wraith', 'minion', 42, 42, 3, 15, 3, 1, 1, 6);
    let treasure = new Cache([jeewa, wood, hide]);
    let rivals = new Cache([rival, rival]);
  
  it('should contain an array of objects', function(){
    
    
    expect(treasure.contents.length).toEqual(3);
    
  })

  it('should be able to randomly select an object from its contents', function() {

    expect(rivals.select(rivals.contents)).toEqual(jasmine.any(Hero))
  })
})