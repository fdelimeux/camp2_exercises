// Insert code here
class Aquarium {

  constructor(fish, algae) {
    this.fishes = fish;
    this.algaes = algae;
  }

  addFish(newFish) {
    this.fishes.push(newFish);
  }

  addAlgae(newAlgae) {
    this.algaes.push(newAlgae);
  }

  getAlgaeNumber() {
    return this.algaes.length;
  }

  getFishList(){
    return this.fishes;
  }

  endTurn() {
    this.algaes.length = 0;
    this.fishes.pop();
    console.log(this.getAlgaeNumber());
    console.log(this.getFishList());
  }
}

class Fish {
  constructor(name, sex, type) {
    this.name = name;
    this.sex = sex;
    this.type = type;
  }
}

class Algae {
  constructor(length) {
    this.length = length;
  }
}

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
