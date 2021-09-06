const Loot = require('../loot.js')

describe("Loot class", function(){

  it("should construct with name, description, and quantity", function(){
    let jeewa = new Loot("Jeewa fruit", "sweet brown fruit used to restore life", 1);
    expect(jeewa).toEqual(jasmine.any(Loot));
  });

  it("should increase quantity by using increase()", function(){
    let jeewa = new Loot("Jeewa fruit", "sweet brown fruit used to restore life", 1);
    jeewa.increase();
    
    expect(jeewa.quantity).toEqual(2);
  });

  it("should decrease quantity by using decrease()", function(){
    let jeewa = new Loot("Jeewa fruit", "sweet brown fruit used to restore life", 1);
    jeewa.decrease();
    
    expect(jeewa.quantity).toEqual(0);
  });

  
})