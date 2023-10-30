/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Turns form data into a JSON object and outputs to console
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="username"
          type="text"></input>
      </label>
      <label>
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
