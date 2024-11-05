// -----------------OOP: --->class---------------->

class AnimalTest {
  name: string;
  species: string;
  sound: string;
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
    return this.sound;
  }
}

const bang = new AnimalTest("MR. Bang", "bang", "pak pak");
const bird = new AnimalTest("Small bird", "bird", "chu chu");
const birdName = bird.name;
const bangSound = bang.makeSound();

console.log(birdName, bangSound);

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
const cat = new Animal("Persian bhai", "cat", "meaw meaw");

cat.makeSound();
