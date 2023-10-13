import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(`Clicked ${text}`);
  }

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
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="purple"
        text="Cuul Cat Button"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="blue"
        text="Subarururu Button"
        onCustomClick={handleCustomClick}
      />
    </>
  );
}

export default App;
