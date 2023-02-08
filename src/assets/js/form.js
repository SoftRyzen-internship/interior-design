const form = document.querySelector('.form');

const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');
const messageField = document.getElementById('message');

// const nameLabel = document.querySelector('.form__label--name');

form.addEventListener('input', onInputChange);
form.addEventListener('submit', onHandleSubmit);

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
  let isFormNotEmpty = checkEmptyField(nameField, phoneField, messageField);
  let isNameValid = inputCheck(nameField);
  let isPhoneValid = inputCheck(phoneField);
  let isFormValid = isFormNotEmpty && isNameValid && isPhoneValid;
  if (isFormValid) {
    e.currentTarget.reset();
  }
}

function checkEmptyField(name, phone, message) {
  let isValid = true;
  if (name.value.trim() === '') {
    setError(name);
    isValid = false;
  } else {
    setSuccess(name);
  }

  if (phone.value.trim() === '') {
    setError(phone);
    isValid = false;
  } else {
    setSuccess(phone);
  }

  if (message.value.trim() === '') {
    setError(message);
    isValid = false;
  } else {
    setSuccess(message);
  }
  return isValid;
}

function setError(field) {
  field.classList.add('error__input');
  field.classList.remove('success__input');
  // nameLabel.classList.add('error__label');
  // nameLabel.classList.remove('success__label');
}

function setSuccess(field) {
  field.classList.add('success__input');
  field.classList.remove('error__input');
  // nameLabel.classList.add('success__label');
  // nameLabel.classList.remove('error__label');
}
