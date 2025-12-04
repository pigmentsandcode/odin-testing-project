import { capitalize, reverseString } from "./stringFunctions.js";

describe("capitalize function", () => {
  test("lowercase word is capitalized", () => {
    expect(capitalize("small")).toBe("Small");
  });

  test("capitalized word is still capitalized", () => {
    expect(capitalize("Big")).toBe("Big");
  });
});

describe("reverseString function", () => {
  test("single char", () => {
    expect(reverseString("b")).toBe("b");
  });

  test("two chars", () => {
    expect(reverseString("ba")).toBe("ab");
  });

  test("three chars", () => {
    expect(reverseString("cba")).toBe("abc");
  });

  test("includes non letter", () => {
    expect(reverseString("race1")).toBe("1ecar");
  });
});
