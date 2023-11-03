// import magnifyingGlass from './assets/search-solid.svg';
import { useState } from 'react';
import './SearchableList.css';

type SearchableListProps = {
  phraseList: Array<string>;
};

export default function SearchableList({ phraseList }: SearchableListProps) {
  const [input, setInput] = useState('');

  const inputList = phraseList.filter((phrase) =>
    phrase.toLowerCase().match(input)
  );

  return (
    <>
      <SearchBar input={input} onChangeInput={setInput} />
      <SearchList phraseList={inputList} />
    </>
  );
}

type SearchBarProps = {
  input: string;
  onChangeInput: (value: string) => void;
};

function SearchBar({ input, onChangeInput }: SearchBarProps) {
  return (
    <input
      value={input}
      onChange={(e) => onChangeInput(e.currentTarget.value)}
      className="input"></input>
  );
}

type SearchListProps = {
  phraseList: Array<string>;
};

function SearchList({ phraseList }: SearchListProps) {
  const phrases = phraseList.map((phrase, index) => {
    return <li key={index}>{phrase}</li>;
  });
  return <ul className="phrase-list">{phrases}</ul>;
}
