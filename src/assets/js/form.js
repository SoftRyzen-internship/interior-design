const form = document.querySelector('.form');

const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');
const messageField = document.getElementById('message');

const errorMessage = document.querySelectorAll('.form__error');

const button = document.querySelector('.form__button');

form.addEventListener('input', onInputChange);
form.addEventListener('submit', onHandleSubmit);
phoneField.addEventListener('blur', onInputChange);

function onInputChange({ target }) {
  if (target.hasAttribute('data-reg')) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  let isValid = true;
  const inputValue = el.value.trim();

  const inputReg = el.getAttribute('data-reg');
  const reg = new RegExp(inputReg);

  if (reg.test(inputValue)) {
    setSuccess(el);
  } else {
    setError(el);
    isValid = false;
  }
  return isValid;
}

function onHandleSubmit(e) {
  e.preventDefault();
  let isNameValid = inputCheck(nameField);
  let isPhoneValid = inputCheck(phoneField);
  let isFormValid = isNameValid && isPhoneValid;
  if (isFormValid) {
    e.currentTarget.reset();
  }
}

function setError(field) {
  field.classList.add('error__input');
  field.classList.remove('success__input');
}

function setSuccess(field) {
  field.classList.add('success__input');
  field.classList.remove('error__input');
}
