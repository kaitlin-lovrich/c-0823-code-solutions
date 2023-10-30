/* eslint-disable @typescript-eslint/no-explicit-any */

export default function RegistrationFormUncontrolled() {
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
