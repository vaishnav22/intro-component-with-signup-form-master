let form = document.querySelector("form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submit");
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Disabling refresh on form submisssion
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   checking for inputs (valid/invalid)
  checkingInput();
});

function checkingInput() {
  // for First Name
  if (firstName.value == "") {
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    removeErrorFor(firstName);
  }

  // for Last Name
  if (lastName.value == "") {
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    removeErrorFor(lastName);
  }

  // for email
  if (email.value == "") {
    setErrorFor(email, "Looks like it is not email");
  } else if (!isEmail(email.value)) {
    setErrorFor(email, "Looks like it is not email");
  } else {
    removeErrorFor(email);
  }
  // for password
  if (password.value == "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    removeErrorFor(password);
  }
}

function setErrorFor(inputName, customMessage) {
  inputName.parentElement.classList = "form-control error";
  let formControl = inputName.parentElement;
  formControl.querySelector(".form-control small").innerText = customMessage;
}

function removeErrorFor(inputName) {
  inputName.parentElement.classList = "form-control";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
