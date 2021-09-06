const Being = require('./being.js')

class Hero extends Being {
  constructor(name, title, maxLife, life, attack, defense, magic, speed, charm, weapon, attackAbility, magicAbility, speedAbility, charmAbility, pack) {
    super(name, title, maxLife, life, attack, defense, magic, speed, charm, weapon, pack)
    this.attackAbility=attackAbility; this.magicAbility=magicAbility;
    this.speedAbility=speedAbility; this.charmAbility=charmAbility;
  }



search(hero){
  let searchRoll = hero.rollD20() + hero.charm;
  if(searchRoll >= 10) {
    return 'found';
  }else {
    return 'nothing';
  }
  
}

loot(hero, target) {
  
  for(let i=0; i < target.pack.length; i++) {
    
    if(target.pack[i] === hero.pack[i]) {
      hero.pack[i].quantity++;
      target.pack.splice(i, 1);
    }if(target.pack[i] !== hero.pack[i]){
       hero.pack.push(target.pack[i])
       target.pack.splice(i, 1);
    }
    
  }
}

// aAbility(target) {
//   let abilityRoll = this.rollD20() + this.attack;
//   let damage = this.attack + this.attackAbility.dice;
//   if(abilityRoll > target.defense) {
//     target.life = target.life - damage;
//   } else {
//     return 'Miss!'
//   }
// }

// mAbility(target) {
//   let abilityRoll = this.rollD20() + this.magic;
//   let damage = this.magic + this.magicAbility.dice;
//   if(abilityRoll > target.defense) {
//     target.life = target.life - damage;
//   } else {
//     return 'Miss!'
//   }
// }

// mAbility(target) {
//   let abilityRoll = this.rollD20() + this.magic;
//   let damage = this.magic + this.magicAbility.dice;
//   if(abilityRoll > target.defense) {
//     target.life = target.life - damage;
//   } else {
//     return 'Miss!'
//   }
// }

}


module.exports = Hero;