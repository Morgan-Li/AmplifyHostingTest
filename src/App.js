import catPicture from './cat.jpg'; // Importing cat picture
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={catPicture} className="App-logo" alt="cat" /> {/* Using cat picture */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;