// Your code here

class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === 'male') {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}

// Example instances for testing
const cat = new Cat("Sasha", "female");
console.log(cat.speak()); // Output: Sasha says meow!

const dog = new Dog("Rufio", "male");
console.log(dog.speak()); // Output: Rufio says woof!

const bird1 = new Bird("Pablo", "male");
console.log(bird1.speak()); // Output: It's me! Pablo, the parrot!

const bird2 = new Bird("Mable", "female");
console.log(bird2.speak()); // Output: Mable says squawk!