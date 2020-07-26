import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Page2 from './components/Page2';

function App() {
  const [component, setComponent] = useState(null);
  const navigatePage2 = () => {
    // import("./components/Page2").then((page2) => {
      setComponent(2);
    // })
  }

  const renderComponent = () => {
    return component === 2 ? <Page2></Page2> : null;
  }

  return (
    <div className="App">
      <header className="App-header">
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
        <button onClick={navigatePage2}>Page 2</button>
        {renderComponent()}
      </header>
    </div>
  );
}

export default App;
