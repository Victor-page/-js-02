const findLongestWord = function(string) {
  let quantityOfWords = string.split(" ");
  let max = 0;
  let longestWord;

  for (let i = 0; i < quantityOfWords.length; i++) {
    let lenOfWord = quantityOfWords[i].length;

    if (lenOfWord > max) {
      max = lenOfWord;
      longestWord = quantityOfWords[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
