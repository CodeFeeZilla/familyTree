const names = {
  kingGeorge: "King George VI",
  elizabeth: "Queen Elizabeth, The Queen Mother",
  philip: "Prince Philip, Duke of Edinburgh",
  elizabethII: "Queen Elizabeth II",
  margaret: "Princess Margaret, Countess of Snowdon",
  camila: "Camila, Duchess of Cornwall",
  charles: "Charles, Prince of Wales",
  diana: "Diana, Princess of Wales",
  anne: "Anne, Princess Royal",
  andrew: "Prince Andrew, Duke of York",
  edward: "Prince Edward, Earl of Wessex",
};

class Person {
  constructor(name, parents) {
    this.name = name;
    this.parents = parents;
  }

  childOf() {
    return this.parents.map((parent) => parent.name).join(" & ") || "unknown";
  }

  sayHi() {
    return "Hello";
  }
}

const kingGeorge = new Person(names.kingGeorge, []);
const elizabeth = new Person(names.elizabeth, []);
const philip = new Person(names.philip, []);
const elizabethII = new Person(names.elizabethII, [kingGeorge, elizabeth]);
const margaret = new Person(names.margaret, [kingGeorge, elizabeth]);
const camila = new Person(names.camila, []);
const charles = new Person(names.charles, [philip, elizabethII]);
const diana = new Person(names.diana, []);
const anne = new Person(names.anne, [philip, elizabethII]);
const andrew = new Person(names.andrew, [philip, elizabethII]);
const edward = new Person(names.edward, [philip, elizabethII]);

const royalFamilyTree = {
  firstGeneration: [kingGeorge, elizabeth],
  secondGeneration: [philip, elizabethII, margaret],
  thirdGeneration: [camila, charles, diana, anne, andrew, edward],
};

console.log(anne.childOf());

module.exports = { royalFamilyTree, Person };
