const Hero = require('../hero.js');

describe("Hero class", function() {

  it('should inherit all aspects from Being class', function() {
    let player = new Hero('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6);
    expect(player).toEqual(jasmine.any(Hero));
  });

  it('should be able to loot() a rivals pack to take their stuff.', function() {
    let player = new Hero('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6, ['wood', 'jeewa']);
    let rival = new Hero('Champion', 'champion', 42, 42, 3, 15, 3, 1, 1, 6, ['hide']);

    player.loot(player, rival);

    expect(player.pack.length).toEqual(3);
  });

  it('should be able to do a successful search() if above a 10', function() {
    let player = new Hero('Champion', 'champion', 42, 42, 3, 15, 3, 1, 10, 6, ['wood', 'jeewa']);

    expect(player.search(player)).toEqual('found');
  });

})