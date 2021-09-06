const Loot = require('./loot.js');

class Weapon extends Loot {
  constructor(name, info, quantity, damage) {
    super(name, info, quantity);
    this.damage=damage;
  }

}

module.exports = Weapon;