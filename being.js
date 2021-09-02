class Being {
  constructor(name, title, maxLife, life, attack, defense, magic, speed, charm, weapon, pack) {
    this.name=name; this.title=title; this.maxLife=maxLife; this.life=life; this.attack=attack; this.defense=defense; this.magic=magic; this.speed=speed; this.charm=charm; this.weapon=weapon; this.pack=pack;
  }

  iDie(life) {
    if (life <= 0) {
      return "Game Over"
    }
  }

  rollD20() {
    let roll = Math.floor(Math.random()*20) +1;
    return roll; 
  }

  minusStat(stat, decrease) {
    stat = stat - decrease;
    return stat;
  }
  plusStat(stat, increase) {
    stat = stat + increase;
    return stat;
  }

  attackTarget(hero, target) {
    let attackRoll = hero.rollD20();
    let bonus = hero.attack;
    let attackNum = attackRoll + bonus;

    if(attackNum <= target.defense) {
      return `${hero.name} rolls an attack of: ${attackRoll} + ${bonus}\n which does not overcome ${target.name}'s defenses`;
    } else {
    let weapon = Math.floor(Math.random()*hero.weapon) +1;
    
    let damage = weapon + bonus;
    target.life = target.life - damage;
    return `${hero.name} rolls an attack of: ${attackRoll} + ${bonus}\nwhich penetrates ${target.name}'s defenses doing ${damage} damage!`;
    }
  }
  search(hero) {
   let searchRoll = hero.rollD20() + hero.charm;
    return searchRoll;
  }

  orderRoll(hero) {
    let orderRoll = hero.rollD20() + hero.speed;
    return orderRoll;
  }
}

module.exports = Being;