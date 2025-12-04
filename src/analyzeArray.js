export function analyzeArray(numArr) {
  let sum = 0;
  let min = numArr[0];
  let max = numArr[0];
  numArr.forEach((num) => {
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;
  });

  return {
    average: sum / numArr.length,
    min: min,
    max: max,
    length: numArr.length,
  };
}
