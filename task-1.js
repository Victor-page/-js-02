const logItems = function(array) {
  console.log(array);
  let index;
  for (index = 0; index < array.length; index++) {
    console.log(`${array.indexOf(array[index]) + 1} - ${array[index]}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
//logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
