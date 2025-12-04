import { caesarCipher } from "./caesarCipher";

describe("caesarCipher", () => {
  test("wrapping z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("case preserve", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("punctuation not changed", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("Number not changed", () => {
    expect(caesarCipher("Hello 12", 3)).toBe("Khoor 12");
  });

  test("shift is 0", () => {
    expect(caesarCipher("Hi", 0)).toBe("Hi");
  });

  test("basic shift of 2", () => {
    expect(caesarCipher("Hi", 2)).toBe("Jk");
  });
});
