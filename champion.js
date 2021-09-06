const Hero = require('./hero.js');

class Champion extends Hero {

overpower(target) {
  let abilityRoll = this.rollD20() + this.attack;
  let damage = this.attack + this.attackAbility.dice;
  if(abilityRoll > target.defense) {
    target.life = target.life - damage;
  } else {
    return 'Miss!'
  }
}

radiantStrike(target) {
  let abilityRoll = this.rollD20() + this.magic;
  let damage = this.magic + this.magicAbility.dice;
  if(abilityRoll > target.defense) {
    target.life = target.life - damage;
  } else {
    return 'Miss!'
  }
}

shieldSlam(target) {
  let abilityRoll = this.rollD20() + this.speed;
  let damage = this.speed + this.speedAbility.dice;
  if(abilityRoll > target.defense) {
    target.life = target.life - damage;
  } else {
    return 'Miss!'
  }
}

heal(target) {
  let abilityRoll = this.rollD20() + this.charm;
  let healing = this.charm + this.charmAbility.dice;
  let newLife = target.life + healing;
  if(newLife >= target.maxLife) {
    target.life = target.maxLife;
  } else {
    target.life = newLife;
  }
}
     
  }

module.exports = Champion;