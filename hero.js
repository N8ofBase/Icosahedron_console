const Being = require('./being.js')

class Hero extends Being {
  


search(hero){
  let searchRoll = hero.rollD20() + hero.charm;
  if(searchRoll >= 10) {
    return 'found';
  }else {
    return 'nothing';
  }
  
}

loot(hero, target) {
  for(let item in target.pack) {
    hero.pack.push(item);
  }
}



}

module.exports = Hero;