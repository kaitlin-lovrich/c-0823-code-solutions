function handleFocus(event) {
  console.log("'focus' event fired");
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log("'blur event fired");
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('value of name:', event.target.value);
}

const inputs = document.getElementById('contact-form').elements;
const $name = inputs.name;
const $email = inputs.email;
const $message = inputs.message;

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
