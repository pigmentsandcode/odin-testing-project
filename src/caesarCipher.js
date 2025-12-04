export function caesarCipher(str, shift) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const output = [];
  for (const ch of str) {
    let i = lowercase.indexOf(ch);
    if (i !== -1) {
      const shifted = (i + shift) % 26;
      output.push(lowercase[shifted]);
      continue;
    }

    i = uppercase.indexOf(ch);
    if (i !== -1) {
      const shifted = (i + shift) % 26;
      output.push(uppercase[shifted]);
      continue;
    }

    output.push(ch);
  }

  return output.join("");
}
