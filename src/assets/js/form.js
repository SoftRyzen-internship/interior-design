const form = document.querySelector('form');
const label = document.querySelector('label');
const input = document.querySelector('input');

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();

  const {
    elements: { name, phone, message },
  } = event.currentTarget;

  const result = { name: name.value, phone: phone.value, message: message.value };
  event.currentTarget.reset();
}
