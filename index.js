// let Jasmine = require('jasmine');
// let jasmine = new Jasmine();

// jasmine.loadConfig({
//   spec_dir: 'spec',
//   spec_files: [
//     "**/*[sS]pec.js"
//   ],
// });

// jasmine.execute();

const Being = require('./being.js');
const Champion = require('./champion.js');
const input = require('readline-sync');

function intro() {
  return `An Icosahedron is a twenty sided polygon with equalateral triangle faces, most commonly reffered to by us as a twenty sided die or D20. In another universe it is a whole world of twenty unique environments wherein the actions and destiny of all living things are determined by the roll of their own personal internal icosahedron. A "20" results in great rewards, exhaulting victories, and bountiful harvests; whilst rolling a "1" ensures suffering, famine, and death... \nPlane 20 of Icosahedron is home to the Crit Castle, currently being corrupted by a foul being known as Feyl. Feyl and its minions are spreading a plague of "1s" across the planes of Icosahedron, increasing the amount of sorrow and death to all flora and fauna. The Tryang is the lowest of these planes and is home to a small village on the brink of destitution, desperate for a savior. Will you venture into The Icosahedron and restore balance to the life of this world?`
}
console.log(intro());

function getHeroName() {
  let heroName = input.question(`What is your name, hero?`)
  return heroName;
}
function getHeroTitle() {
  let heroTitle = input.question(`Choose your title: \nEnter 0 to be a Champion!\nA warrior infused with magical power to strike down rivals and heal allies\n\nEnter 1 to be a Maverick!\nAn archery expert quick on their feet, able to eliminate rivals from a distance. Their intuition helps discover hidden traps and treasures\n\nEnter 2 to be a Soul Seer!\nA being surging with psychic power, capable of inflicting torture and terror upon their rivals\n\nEnter 3 to be a Whisper!\nA dark figure that moves through the shadows, dispatching rivals with no sound above a whisper\n`)
  return heroTitle;
}

function createHero() {

  let name = getHeroName();
  let title = getHeroTitle();
  if(title == 0) {
    let hero = new Champion(name, title, 42, 42, 2, 15, 3, 1, 2, 6);
    return `Name: ${hero.name}\nTitle: ${hero.title}\nLife: ${hero.maxLife}\nAttack: ${hero.attack}\nDefense: ${hero.defense}\nMagic: ${hero.magic}\nSpeed: ${hero.speed}\nCharm: ${hero.charm}\nWeapon: Broadsword`
  }

}
console.log(createHero())




let champion = new Champion('Saynt', 'champion', 42, 42, 2, 15, 3, 1, 2, 6);
let rival = new Being('Rival', 'rival', 25, 25, 2, 10, 2, 2, 1, 4)
let maverick = new Maverick('Avayl', 'maverick', 38, 37, 2, 13, 1, 3, 2, 6);
let soulseer = new SoulSeer('Faytal', 'soul seer', 33, 1, 12, 3, 2, 2, 6);
let whisper = new Whisper('Sylent', 'whisper', 35, 3, 13, 1, 3, 1, 6); 
