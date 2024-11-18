//My Solution

class Vec {
  constructor(x, y){//No need to declare x and y internally unless it is private
    this.x = x;
    this.y = y;
  }

  plus(other){//It's "other" because an object with class Vec is its parameter
    return new Vec(this.x + other.x, this.y + other.y)
  }

  minus(other){
    return new Vec(this.x - other.x, this.y - other.y)
  }

  get length(){
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }

}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//Textbook Solution
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}