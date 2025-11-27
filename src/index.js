/* index.js - login_signup_form_01 */
import "./style.css";

let loginLnk = document.getElementById("loginLink");
let signupLnk = document.getElementById("signupLink");

function changeForm(event) {
  let signupCard = document.getElementById("signupCard");
  signupCard.classList.toggle("hide");
  let loginCard = document.getElementById("loginCard");
  loginCard.classList.toggle("hide");
}

loginLnk.addEventListener("click", changeForm);
signupLnk.addEventListener("click", changeForm);
