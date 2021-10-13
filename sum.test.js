const { sum } = require("./sum");

describe("suming function", () => {
  test("must equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
