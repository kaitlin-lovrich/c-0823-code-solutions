import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CustomButton
        color="pink"
        text="Fancy Button"
        onCustomClick={() => alert('Fancy Button Clicked')}
      />
      <CustomButton
        color="purple"
        text="Cuul Cat Button"
        onCustomClick={() => alert('Cuul Cat Button Clicked')}
      />
      <CustomButton
        color="blue"
        text="Subarururu Button"
        onCustomClick={() => alert('Subarururu Button Clicked')}
      />
    </>
  );
}

export default App;
