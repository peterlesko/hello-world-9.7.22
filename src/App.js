import logo from './logo.svg';
import './App.css';
import ExampleComponent,{AnotherComponent} from './components/ExampleComponent';
import Greeting from './components/Greeting';
import SongList from './components/SongList';

function App() {
  return (

    <div className="App">
      <ExampleComponent />
      <AnotherComponent />
      <Greeting name="Matt" age="23" />
      <Greeting name="Sally" age="43" />
      <p className="firstPara">This is another paragraph</p>
      <SongList />


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
