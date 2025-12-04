import { calculator } from "./calculator";

describe("calculator functions", () => {
  test("add function 2+3", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test("subtract 3-1", () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  });
  test("divide 6/2", () => {
    expect(calculator.divide(6, 2)).toBeCloseTo(3);
  });
  test("multiply 5x4", () => {
    expect(calculator.multiply(5, 4)).toBe(20);
  });
});
