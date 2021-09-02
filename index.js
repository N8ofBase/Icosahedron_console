let Jasmine = require('jasmine');
let jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    "**/*[sS]pec.js"
  ],
});

jasmine.execute();

// const Being = require('./being.js');
// const Champion = require('./champion.js');

// let champion = new Champion('Saynt', 'champion', 42, 42, 2, 15, 3, 1, 2, 6);
// let rival = new Being('Rival', 'rival', 25, 25, 2, 10, 2, 2, 1, 4)
// let maverick = new Maverick('Avayl', 'maverick', 38, 37, 2, 13, 1, 3, 2, 6);
// let soulseer = new SoulSeer('Faytal', 'soul seer', 33, 1, 12, 3, 2, 2, 6);
// let whisper = new Whisper('Sylent', 'whisper', 35, 3, 13, 1, 3, 1, 6); 
