// See Sparta courses for the exercise summary
const car = {
  // speed: 10,
  // minutes:30,

  start: function(){
    this.speed = 0;
    this.minutes = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed:function(speed) {
    this.speed = speed;
    return this;
  },
  drive:function(minutes) {
    this.minutes = minutes;
    this.distance = this.distance + this.speed*this.minutes/60;
    return this;
  },
  showDistance:function() {
    console.log(this.distance + " Km");
  }
};

console.log(car);
car.start();
console.log(car);
car.changeSpeed(20);
console.log(car);
car.drive(30);
console.log(car);
car.showDistance();

car.start().changeSpeed(20).drive(30).showDistance();

car
  .start()
  .changeSpeed(130).drive(45)
  .changeSpeed(50).drive(30)
  .changeSpeed(90).drive(80)
  .showDistance();

module.exports = car;
