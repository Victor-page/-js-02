const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  let loginLength = login.length;
  if (4 <= loginLength && loginLength <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return alert("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (!isLoginUnique(allLogins, login)) {
    return alert("Такой логин уже используется!");
  } else {
    allLogins.push(login);
    console.log(logins);
    return alert("'Логин успешно добавлен!'");
  }
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
