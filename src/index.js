/* index.js - login_signup_form_01 */
import "./style.css";
import "./element_creator.js";

let loginLnk = document.getElementById("loginLink");
let signupLnk = document.getElementById("signupLink");

let signupSubmitBtn = document.getElementById("signupBtn");
let loginSubmitBtn = document.getElementById("loginBtn");

function con(obj) {
  if (obj === null || obj === undefined) {
    console.log("obj is null or undefined");
    return;
  }

  /* src: https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript */
  if (typeof obj === "string" || obj instanceof String) {
    console.log(obj);
    return;
  }

  if (Array.isArray(obj)) {
    obj.forEach((item) => {
      console.log(item);
    });
  }

  // Source - https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
  if (typeof obj === "object" && !Array.isArray(obj) && x !== null) {
    console.dir(obj);
    return;
  }
}

function changeForm(event) {
  let signupCard = document.getElementById("signupCard");
  signupCard.classList.toggle("hide");
  let loginCard = document.getElementById("loginCard");
  loginCard.classList.toggle("hide");
}

/**
 * function to check username validity
 **/
function usernameCheck(str) {
  if (str === null || str === undefined) {
    return "Error! Username is null or undefined";
  }
  if (Array.isArray(str)) {
    return "Error! Username is not a string";
  }
  if (str.length < 3) {
    return "Error! Username is too short";
  }
}

function emailCheck(str) {
  let tmpRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (str === null || str === undefined) {
    return "Error! Username is null or undefined";
  }
  if (Array.isArray(str)) {
    return "Error! Username is not a string";
  }
  if (!str.match(tmpRegex)) {
    return "Error! Email address must match this format: user@email.com";
  }
}

/**
 * Function to check on the password input
 **/
function checkPassword(str) {
  let errorArray = [];

  /* If string is 'zero' length */
  if (str.length == 0) {
    errorArray.push("Error! Password must not be empty");
    return errorArray;
  }
  /* Check if the string length is less that 8 characters */
  if (str.length < 8) {
    errorArray.push(
      "Error! Password is too short, must be at least 8 characters or more",
    );
  }
  /* Check for lowercase letters, at least 1 */
  let tmpRegex = /[a-z]/g;
  if (!str.match(tmpRegex)) {
    errorArray.push("Error! Must include at least 1 lowercase letter");
  }
  /* Check for uppercase letters, at least 1 */
  tmpRegex = /[A-Z]/g;
  if (!str.match(tmpRegex)) {
    errorArray.push("Error! Must include at least 1 uppercase letter");
  }
  /* Check for number, at least 1 */
  tmpRegex = /[0-9]/g;
  if (!str.match(tmpRegex)) {
    errorArray.push("Error! Must include at least 1 number");
  }
  /* Check for special characters, at least 1 */
  tmpRegex = /[\W]/g;
  if (!str.match(tmpRegex)) {
    errorArray.push("Error! Must include at least 1 special character");
  }

  return errorArray;
}

function submitAction(event) {
  event.preventDefault();
  let usernameTxtInput = document.getElementById("usernameTxtInput");
  let emailTxtInput = document.getElementById("emailTextInput");
  let passwordTxtInput = document.getElementById("passwordInput");
  let repeatPasswordTxtInput = document.getElementById("repeatPasswordInput");

  let errorMsgArray = [];

  if (event.target.id == "signupBtn") {
    con("[submitAction] signup submit button pressed");
    if (!usernameTxtInput.checkValidity()) {
      con("[submitAction] username: " + usernameTxtInput.value);
      errorMsgArray.push.apply(errorMsgArray, [
        usernameCheck(usernameTxtInput.value),
      ]);
    }
    if (!emailTxtInput.checkValidity()) {
      errorMsgArray.push.apply(errorMsgArray, [
        emailCheck(emailTextInput.value),
      ]);
      // con("Error entering email: " + emailTxtInput.validationMessage);
    }
    if (!passwordTxtInput.checkValidity()) {
      con("Password entered: " + passwordTxtInput.value);
      errorMsgArray.push.apply(
        errorMsgArray,
        checkPassword(passwordTxtInput.value),
      );
    }
    if (passwordTxtInput.value !== repeatPasswordTxtInput.value) {
      con("Re-entered password: " + repeatPasswordTxtInput.value);
      errorMsgArray.push.apply(errorMsgArray, [
        "Error! Password and Re-entered password does not match",
      ]);
    }
    con("Error messages:\n");
    con(errorMsgArray);
  }

  if (event.target.id == "loginBtn") {
    con("[submitAction] login submit button pressed");
  }
}

loginLnk.addEventListener("click", changeForm);
signupLnk.addEventListener("click", changeForm);

signupSubmitBtn.addEventListener("click", submitAction);
loginSubmitBtn.addEventListener("click", submitAction);
