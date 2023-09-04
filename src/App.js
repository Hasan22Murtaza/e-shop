import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'

function App() {
	// The state for our timer
	const [timer, setTimer] = useState(new Date().getTime());


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wellcome Into Riemann System (PVT.) LTD
        </p>
        <h2>{timer}</h2>

      </header>
    </div>
  );
}

export default App;
