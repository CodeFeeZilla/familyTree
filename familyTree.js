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

const childOf = function () {
  return this.parents.map((parent) => parent.name).join(" & ") || "unkown";
};

const filterName = (generations, nametoFilterOut) => {
  const generationArray = Object.values(generations);
  return generationArray.filter(
    (generation) => !nametoFilterOut.includes(generation.name)
  );
};

const generationOne = {
  kingGeorge: {
    name: names.kingGeorge,
    parents: [],
    childOf: childOf,
  },
  elizabeth: {
    name: names.elizabeth,
    parents: [],
    childOf: childOf,
  },
};

const generationTwo = {
  philip: {
    name: names.philip,
    parents: [],
    childOf: childOf,
  },
  elizabethII: {
    name: names.elizabethII,
    parents: generationOne,
    childOf: childOf,
  },
  margaret: {
    name: names.margaret,
    parents: generationOne,
    childOf: childOf,
  },
};

const generationThree = {
  camila: {
    name: names.camila,
    parents: [],
    childOf: childOf,
  },
  charles: {
    name: names.charles,
    parents: filterName(generationTwo, [names.margaret]),
    childOf: childOf,
  },
  diana: {
    name: names.diana,
    parents: [],
    childOf: childOf,
  },
  anne: {
    name: names.anne,
    parents: filterName(generationTwo, [names.margaret]),
    childOf: childOf,
  },
  andrew: {
    name: names.andrew,
    parents: filterName(generationTwo, [names.margaret]),
    childOf: childOf,
  },
  edward: {
    name: names.edward,
    parents: filterName(generationTwo, [names.margaret]),
    childOf: childOf,
  },
};

const generation = [generationOne, generationTwo, generationThree];

// const names = {
//     kingGeorge: "King George VI",
//     elizabeth: "Queen Elizabeth, The Queen Mother",
//     philip: "Prince Philip, Duke of Edinburgh",
//     elizabethII: "Queen Elizabeth II",
//     margaret: "Princess Margaret, Countess of Snowdon",
//     camila: "Camila, Duchess of Cornwall",
//     charles: "Charles, Prince of Wales",
//     diana: "Diana, Princess of Wales",
//     anne: "Anne, Princess Royal",
//     andrew: "Prince Andrew, Duke of York",
//     edward: "Prince Edward, Earl of Wessex",
//   };

console.log(generation[2].diana.childOf());
