class Animal {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  changeName(newName: string) {
    this.name = newName;
  }
}

const dog = new Animal('dog');
dog.changeName('sss');
// TS2341: Property 'name' is private and only accessible within class 'Animal'.
dog.name = 'abc';
