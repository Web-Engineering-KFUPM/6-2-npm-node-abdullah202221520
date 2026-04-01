export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, num) => acc - num);
}

export function multiply(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, num) => acc * num, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) return NaN;
  return numbers.reduce((acc, num) => {
    if (num === 0 || isNaN(acc)) return "Division by zero is not allowed";
    return acc / num;
  });
}
