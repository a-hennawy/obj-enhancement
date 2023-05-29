const createInstructor = (firstName, lastName) => ({ firstName, lastName });
console.log(createInstructor("Ahmed", "Hennawy"));

// *******************************************************************************

const favoriteNumber = 42;

const instructor1 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};
console.log(instructor1);

// *******************************************************************************

const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};
console.log(instructor);
console.log(instructor.sayHi());
console.log(instructor.sayBye());

// *******************************************************************************

const createAnimal = (species, verb, noise) => ({
  species: species,
  [verb]: () => noise,
});

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
console.log(d.bark()); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()); //"BAAAAaaaa"
