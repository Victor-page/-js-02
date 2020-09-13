const checkForSpam = function(message) {
  let forbiddenWord1 = "spam";
  let forbiddenWord2 = "sale";

  if (
    message.toLowerCase().includes(forbiddenWord1) ||
    message.toLowerCase().includes(forbiddenWord2)
  ) {
    return true;
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
