"use strict";

const trialForm = document.querySelector(".free-trial-form");

trialForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.querySelector("#first-name").input;
  const lastName = document.querySelector("#last-name").input;
  const email = document.querySelector("#email").input;
  const password = document.querySelector("#password").input;
  if (!firstName) {
    const errorMsgFirstName = document.createElement("p");
    errorMsgFirstName.classList.add("error-msg");
    errorMsgFirstName.textContent = "First name cannot be empty";
    document.querySelector("#fn-label").append(errorMsgFirstName);
    console.log("no first name");
  }
});
