/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ValidatedInput.css';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  let message;
  if (password === '') {
    message = 'A password is required';
  } else if (password.length < 8) {
    message = 'Your password is too short';
  } else {
    message = '';
  }

  const xOrCheck = message ? ' ✖️' : ' ✔️';

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"></input>
      </label>
      <span>{xOrCheck}</span>
      <p>{message}</p>
    </form>
  );
}
