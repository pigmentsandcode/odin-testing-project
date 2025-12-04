import { analyzeArray } from "./analyzeArray";

describe("analyze array", () => {
  test("single element", () => {
    expect(analyzeArray([2])).toEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 1,
    });
  });

  test("two numbers", () => {
    expect(analyzeArray([2, 4])).toEqual({
      average: 3,
      min: 2,
      max: 4,
      length: 2,
    });
  });

  test("6 nums", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
