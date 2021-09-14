class Being {
  constructor(name, title, maxLife, life, attack, defense, magic, speed, charm, weapon, pack) {
    this.name=name; this.title=title; this.maxLife=maxLife; this.life=life; this.attack=attack; this.defense=defense; this.magic=magic; this.speed=speed; this.charm=charm; this.weapon=weapon; this.pack=pack;
  }

  iDie() {
    if (this.life <= 0) {
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

  attackTarget(target) {
    let attackRoll = this.rollD20();
    let bonus = this.attack;
    let attackNum = attackRoll + bonus;

    if(attackNum <= target.defense) {
      return `${this.name} rolls an attack of: ${attackRoll} + ${bonus}\n which does not overcome ${target.name}'s defenses`;
    } else {
    let weapon = Math.floor(Math.random()*this.weapon) +1;
    
    let damage = weapon + bonus;
    target.life = target.life - damage;
    return `${this.name} rolls an attack of: ${attackRoll} + ${bonus}\nwhich penetrates ${target.name}'s defenses doing ${damage} damage!`;
    }
  }
  search() {
   let searchRoll = this.rollD20() + this.charm;
    return searchRoll;
  }

  orderRoll() {
    let orderRoll = this.rollD20() + this.speed;
    return orderRoll;
  }

  consume(loot) {
    let healing = loot.healing;
    if(this.life < this.maxLife) {
      this.life = this.life + healing;
      loot.quantity--;
      if(this.life > this.maxLife) {
        this.life = this.maxLife;
      }
    } else {
      return 'Not Hungry'
    }
  }
}

module.exports = Being;