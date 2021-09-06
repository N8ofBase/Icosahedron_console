
class Cache {
  constructor(contents) {
    this.contents=contents;
  }

  select(contents) {
    let selectRoll = Math.floor(Math.random()*contents.length);
    let selected = contents[selectRoll]
    
    return selected
  }
}

module.exports = Cache;