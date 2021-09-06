const Loot = require('./loot.js');

class Food extends Loot {
  constructor(name, info, quantity, healing) {
    super(name, info, quantity);
    this.healing=healing;
  }
}

module.exports = Food;