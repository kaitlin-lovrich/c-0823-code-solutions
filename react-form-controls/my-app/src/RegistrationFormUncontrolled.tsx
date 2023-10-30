/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Turns form data into a JSON object and outputs to console
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" type="text"></input>
      </label>
      <label>
        Password:
        <input name="password" type="password"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

// event.target is what the user clicked on, event.currentTarget is what the event handler is on
// use event.currentTarget in react because it is typed correctly
