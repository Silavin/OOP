class Ball {
  constructor(radius) {
    this.radius = radius;
  }

  get volume() {
    const pie = 3.14;
    const radiusCube = Math.pow(this.radius, 3);
    return (4 / 3) * pie * radiusCube;
  }
}

class Football extends Ball {
  constructor() {
    super();

    this.radius = 30;
    this.timesKickedToday = 10;
  }

  get footballVolume() {
    return this.volume;
  }

  get getTimesKickedToday() {
    return this.timesKickedToday;
  }

  kick() {
    this.timesKickedToday += 1;
  }
}

const myFootBall = new Football();
const volumeOfMyFootBall = myFootBall.footballVolume;
console.log(volumeOfMyFootBall + ' cm cube');

const howManyKicksToday = myFootBall.getTimesKickedToday;
console.log('I have kicked');
console.log(`${howManyKicksToday} time today`);

myFootBall.kick();
myFootBall.kick();
myFootBall.kick();

const updatedHowManyKicksToday = myFootBall.getTimesKickedToday;
console.log('Updated: I have kicked');
console.log(`${updatedHowManyKicksToday} time today`);
