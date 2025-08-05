var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

logDairy();

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let property of Object.keys(bird)) {
    console.log(property + ': ' + bird[property]);
  }
}

birdCan();

function animalCan() {
  for (let property in bird) {
    console.log(property + ': ' + bird[property]);
  }
}

animalCan();