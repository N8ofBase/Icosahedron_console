class Loot {
  constructor(name, info, quantity) {
    this.name=name; this.info=info; this.quantity=quantity;   
  }

  increase(){
this.quantity++;
}
  decrease(){
if(this.quantity > 0) {
  this.quantity--;
  }
}
  
}
module.exports = Loot;