/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent } from 'react';

export default function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Logs the username and password object to the console
    console.log({ userName, password });
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
