// const formatString = function(string) {
//   let sliced = string.slice(0, 41);
//   if (sliced.length < string.length) {
//     string = sliced += "...";
//   }
//   return string;
// };

// or
// const formatString = function(string) {
//   if (string.length > 40) {
//     return `${string.slice(0, 41)}...`;
//   } else {
//     return string;
//   }
// };

// or
const formatString = string =>
  string.length > 40 ? `${string.slice(0, 41)}...` : string;

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
