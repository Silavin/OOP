class Person {
  constructor({ firstName, lastName, job }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skills = [];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fN) {
    [this.firstName, this.lastName] = fN.split(' ');
  }

  learn(skill) {
    this.skills.push(skill);
  }
}

class Job {
  constructor(company, position, salary) {
    this.company = company;
    this.position = position;
    this.salary = salary;
  }
}

const john = new Person({
  firstName: 'John',
  lastName: 'Doe',
  job: new Job('Youtube', 'developer', 200000),
});

const roger = new Person({
  firstName: 'Roger',
  lastName: 'Federer',
  job: new Job('ATP', 'tennis', 1000000),
});

john.fullName = 'Mike Smith';
john.learn('es6');
roger.learn('programming');
john.learn('es7');

console.log(john);
console.log(roger);
