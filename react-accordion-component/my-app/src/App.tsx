import Accordion from './Accordion';
import './App.css';

const topics = [
  {
    id: 1,
    name: 'Hypertext Markup Language',
    info: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technoloaies for the World Wide Web.',
  },
  {
    id: 2,
    name: 'Cascading Style Sheets',
    info: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web. alonaside HTML and JavaScript.',
  },
  {
    id: 3,
    name: 'JavaScript',
    info: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based obiect-orientation. and first-class functions.',
  },
];

function App() {
  return <Accordion topics={topics} />;
}

export default App;
