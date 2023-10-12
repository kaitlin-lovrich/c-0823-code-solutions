# react-jsx-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSX?
  JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
  JSX => JavaScript and XML
- How does React use JSX to render components?
  JSX elements are used to make DOM calls that create modify and delete DOM elements
  A react component returns a jsx element which represents how the DOM should be structured

## Notes

- Why do multiple JSX tags need to be wrapped?
  JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

camelcase for inline styling. backGroundProperty

double curlies ususally are only use in inline styling

```js
<ul
  style={{
    backGroundColor: 'black',
    color: 'red',
  }}></ul>
```

CANNOT write javascript inside of JSX <></>

Export defualt key word is used so you can import your function aka components to other files

if you have a file named button.jsx for example,
you have 2 functions inside your button.jsx file
button()
runThis()

at the bottm of the file you have:
export default button

or to do both:
export { button, runThis }

if you did export default button, in ap.jsx to import reunThis, you would need to do
import { runThis } from './button.jsx'

you can put export keyword infront of your function declaration or at the bottom
