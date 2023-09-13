const $contactForm = document.forms['contact-form'];

function listenSubmit(event) {
  event.preventDefault();
  const $nameValue = $contactForm.name.value;
  const $emailValue = $contactForm.email.value;
  const $messageValue = $contactForm.message.value;

  const valueObj = {
    $name: $nameValue,
    $email: $emailValue,
    $message: $messageValue,
  };

  console.log(valueObj);
}

$contactForm.addEventListener('submit', listenSubmit);
