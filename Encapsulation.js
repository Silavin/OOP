class Animal {
  constructor(name = 'anonymous', legs = 4, noise = 'nothing') {
    this.type = 'animal';
    this.name = name;
    this.legs = legs;
    this.noise = noise;
  }

  set eats(food) {
    this.food = food;
  }

  get dinner() {
    return `${this.name} eats ${this.food || 'nothing'} for dinner.`;
  }
}

const rex = new Animal('Rex', 4, 'woof');
rex.eats = 'anything'; // standard setter
rex.food = 'tofu'; // bypass the eats setter altogether
console.log(rex.dinner); // Rex eats tofu for dinner.

function AnimalSetup(nameInput = 'doggo') {
  const name = nameInput;
  let food = 'pudding';

  function eats(foodInput) {
    food = foodInput;
  }

  function dinner() {
    return `${name} eats ${food || 'nothing'} for dinner.`;
  }

  return {
    eats,
    dinner,
  };
}

const doggy = new AnimalSetup();

console.log(doggy.dinner());
console.log(rex.food);
console.log(doggy.food);
