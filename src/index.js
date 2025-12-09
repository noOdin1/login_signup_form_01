/* index.js - login_signup_form_01 */
import "./style.css";

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

loginLnk.addEventListener("click", changeForm);
signupLnk.addEventListener("click", changeForm);
