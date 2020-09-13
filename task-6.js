let input = +prompt("Enter a number", "");
const numbers = [];
let total = 0;

while (input) {
  numbers.push(input);
  input = +prompt("Insert a number", "");
}

for (let value of numbers) {
  total += value;
}
console.log(`Общая сумма чисел равна ${total}`);
