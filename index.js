// let Jasmine = require('jasmine');
// let jasmine = new Jasmine();

// jasmine.loadConfig({
//   spec_dir: 'spec',
//   spec_files: [
//     "**/*[sS]pec.js"
//   ],
// });

// jasmine.execute();

const Champion = require('./champion.js');
const Maverick = require('./maverick.js');
const SoulSeer = require('./soulseer.js');
const Whisper = require('./whisper.js');
const input = require('syncprompt');

function intro() {
  return `An Icosahedron is a twenty sided polygon with equalateral triangle faces, most commonly reffered to by us as a twenty sided die or D20. In another universe it is a whole world of twenty unique environments wherein the actions and destiny of all living things are determined by the roll of their own personal internal icosahedron. A "20" results in great rewards, exhaulting victories, and bountiful harvests; whilst rolling a "1" ensures suffering, famine, and death... \nPlane 20 of Icosahedron is home to the Crit Castle, currently being corrupted by a foul being known as Feyl. Feyl and it's minions are spreading a plague of "1's" across the planes of Icosahedron, increasing the amount of sorrow and death to all flora and fauna. The Tryang is the lowest of these planes and is home to a small village on the brink of destitution, desperate for a savior. Will you venture into The Icosahedron and restore balance to the life of this world?\n`;
}
console.log(intro());

function getHeroName() {
  let heroName = input(`What is your name, hero?\n`)
  return heroName;
}
function getHeroTitle() {
  let heroTitle = input(`Choose your title: \nEnter 0 to be a Champion!\nA warrior infused with magical power to strike down rivals and heal allies\n\nEnter 1 to be a Maverick!\nAn archery expert quick on their feet, able to eliminate rivals from a distance. Their intuition helps discover hidden traps and treasures\n\nEnter 2 to be a Soul Seer!\nA being surging with psychic power, capable of inflicting torture and terror upon their rivals\n\nEnter 3 to be a Whisper!\nA dark figure that moves through the shadows, dispatching rivals with no sound above a whisper\n\n`)
  if(heroTitle == 0) {
    let titleString = 'Champion';
    return titleString;
  }else if(heroTitle == 1) {
    let titleString = 'Maverick';
    return titleString;
  }if(heroTitle == 2) {
    let titleString = 'Soul Seer';
    return titleString;
  }if(heroTitle == 3) {
    let titleString = 'Whisper';
    return titleString;
  }
  
}

function createHero() {

  let name = getHeroName();
  let title = getHeroTitle();
  if(title == 'Champion') {
    let hero = new Champion(name, title, 42, 42, 2, 15, 3, 1, 2, 6);
    return `\nName: ${hero.name}\nTitle: ${hero.title}\nLife: ${hero.maxLife}\nAttack: ${hero.attack}\nDefense: ${hero.defense}\nMagic: ${hero.magic}\nSpeed: ${hero.speed}\nCharm: ${hero.charm}\nWeapon: Broadsword`
  }
  else if(title == 'Maverick') {
    let hero = new Maverick(name, title, 38, 38, 2, 13, 1, 3, 2, 6);
    return `\nName: ${hero.name}\nTitle: ${hero.title}\nLife: ${hero.maxLife}\nAttack: ${hero.attack}\nDefense: ${hero.defense}\nMagic: ${hero.magic}\nSpeed: ${hero.speed}\nCharm: ${hero.charm}\nWeapon: Longbow`
  }
  else if(title == 'Soul Seer') {
    let hero = new SoulSeer(name, title, 33, 33, 1, 12, 3, 2, 2, 6);
    return `\nName: ${hero.name}\nTitle: ${hero.title}\nLife: ${hero.maxLife}\nAttack: ${hero.attack}\nDefense: ${hero.defense}\nMagic: ${hero.magic}\nSpeed: ${hero.speed}\nCharm: ${hero.charm}\nWeapon: Staff`
  }
  else if(title == 'Whisper') {
    let hero = new Whisper(name, title, 35, 35, 3, 13, 1, 3, 1, 6);
    return `\nName: ${hero.name}\nTitle: ${hero.title}\nLife: ${hero.maxLife}\nAttack: ${hero.attack}\nDefense: ${hero.defense}\nMagic: ${hero.magic}\nSpeed: ${hero.speed}\nCharm: ${hero.charm}\nWeapon: Bone Dagger`
  }


}
console.log(createHero())




// let champion = new Champion('Saynt', 'champion', 42, 42, 2, 15, 3, 1, 2, 6);
// let rival = new Being('Rival', 'rival', 25, 25, 2, 10, 2, 2, 1, 4)
// let maverick = new Maverick('Avayl', 'maverick', 38, 37, 2, 13, 1, 3, 2, 6);
// let soulseer = new SoulSeer('Faytal', 'soul seer', 33, 1, 12, 3, 2, 2, 6);
// let whisper = new Whisper('Sylent', 'whisper', 35, 3, 13, 1, 3, 1, 6); 
