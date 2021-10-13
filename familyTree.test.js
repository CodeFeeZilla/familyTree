const { expect } = require("@jest/globals");
const { royalFamilyTree, Person } = require("./familyTreeClass");

describe("Royal Family Tree Object and Person Class Tests", () => {
  test.skip("Failing Test: Testing if royalFamilyTree is an instance of Person", () => {
    expect(royalFamilyTree instanceof Person).toBe(true);
  });

  test.skip("Failing Test: Testing if royalFamilyTree is an instance of Person", () => {
    expect(royalFamilyTree instanceof Person).toBe(true);
  });

  test.skip("Failing test: Testing if type of royalFamilyTree is 'string'", () => {
    expect(typeof royalFamilyTree).toBe("string");
  });

  test.skip("Passing test: Testing if type of royalFamilyTree is 'object'", () => {
    expect(typeof royalFamilyTree).toBe("object");
  });

  test("Testing third generation childOf methods returning expected parents", () => {
    expect(royalFamilyTree.thirdGeneration[0].childOf()).toBe("unknown");
    expect(royalFamilyTree.thirdGeneration[1].childOf()).toBe(
      "Prince Philip, Duke of Edinburgh & Queen Elizabeth II"
    );
    expect(royalFamilyTree.thirdGeneration[2].childOf()).toBe("unknown");
    expect(royalFamilyTree.thirdGeneration[3].childOf()).toBe(
      "Prince Philip, Duke of Edinburgh & Queen Elizabeth II"
    );
    expect(royalFamilyTree.thirdGeneration[4].childOf()).toBe(
      "Prince Philip, Duke of Edinburgh & Queen Elizabeth II"
    );
    expect(royalFamilyTree.thirdGeneration[5].childOf()).toBe(
      "Prince Philip, Duke of Edinburgh & Queen Elizabeth II"
    );
  });

  test("Testing second generation childOf methods returning expected parents", () => {
    expect(royalFamilyTree.secondGeneration[0].childOf()).toBe("unknown");
    expect(royalFamilyTree.secondGeneration[1].childOf()).toBe(
      "King George VI & Queen Elizabeth, The Queen Mother"
    );
    expect(royalFamilyTree.secondGeneration[2].childOf()).toBe(
      "King George VI & Queen Elizabeth, The Queen Mother"
    );
  });

  test("Testing first generation childOf methods returning expected parents", () => {
    expect(royalFamilyTree.firstGeneration[0].childOf()).toBe("unknown");
    expect(royalFamilyTree.firstGeneration[1].childOf()).toBe("unknown");
  });
});
