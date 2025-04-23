class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  makesSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makesSound() {
    console.log(`${this.name} barks`);
  }
}

const Doggy = new Dog("Tommy");

Doggy.makesSound();
