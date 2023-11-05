import './App.css';

function App() {
  return (
    <>
      <div className="row">
        <div id="left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="img-div">
          <img className="hidden" src="./images/001.png" />
          <img className="hidden" src="./images/004.png" />
          <img className="hidden" src="./images/007.png" />
          <img className="hidden" src="./images/025.png" />
          <img className="hidden" src="./images/039.png" />
        </div>
        <div id="right-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="row">
        <i className="fa-solid fa-circle active"></i>
        <i className="fa-regular fa-circle"></i>
        <i className="fa-regular fa-circle"></i>
        <i className="fa-regular fa-circle"></i>
        <i className="fa-regular fa-circle"></i>
      </div>
    </>
  );
}

export default App;
