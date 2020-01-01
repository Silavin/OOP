class Address {
  constructor(
    street = 'Smith Street',
    city = 'Singapore',
    state = 'Singapore',
    postalCode = '100350',
    country = 'Singapore',
  ) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
  }

  set setAddress({
    street = 'Smith Street',
    city = 'Singapore',
    state = 'Singapore',
    postalCode = '100350',
    country = 'Singapore',
  }) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
  }

  get getAddress() {
    return {
      street: this.street,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      country: this.country,
    };
  }
}

class Person {
  constructor(name = 'John Hicks', age = '34') {
    this.name = name;
    this.age = age;
    this.address = new Address();
  }
}

console.log(new Person());
