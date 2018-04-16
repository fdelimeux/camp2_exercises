// See Sparta courses for the exercise summary

const orangeTree = {

  seed:function(){
    this.height=0;
    this.age=0;
    this.oranges=0;
    this.alive=true;
  },
  pickAnOrange:function(){
    if(this.oranges > 0) {
      this.oranges -= 1;
      return true;
    }
    return false;
  },
  ageOneYear:function(){
    this.age += 1;
    if(this.age < 10) {
      this.height=this.age*25;
      if (this.age >= 5) {
        this.oranges = 10;
      }
    }
    if(this.age >= 10 && this.age <20) {
      this.height=9*25 + (this.age-9)*10;
      this.oranges = 20;
    }

    if (this.age >= 20 && this.age <40) {
      this.oranges = 5;
    }
    if (this.age >= 40) {
      this.oranges = 0;
    }
    if(this.age >= 100) {
      this.alive=false;
    }

  }

};
module.exports = orangeTree;
