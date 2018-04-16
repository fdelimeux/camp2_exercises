// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment
const machine = {
  fillWithLitersOfCoffee:function(liters){
    this.litersOfCoffee += liters;
  },
  expresso:function(){
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee -= 0.08;
      return true;
    }
    return false;
  },
  longCoffee:function(){
    if (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee -= 0.15;
      return true;
    }
    return false;
  },
};

module.exports = machine;
