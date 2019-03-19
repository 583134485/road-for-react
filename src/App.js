import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
          // helloWorld = 'Bye Bye React';

          const helloWorld2 = {
            text: 'Welcome to the Road to learn React'
          };
          helloWorld2.text = 'Bye Bye React';
    // allowed
const helloWorld3 = {
  text: 'Welcome to the Road to learn React'
};
helloWorld3.text = 'Bye Bye React';
    return (
      <div className="App">
  
      <h2>welcome to the road to learn react</h2>
      <h2>{helloWorld}</h2>
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
}

export default App;
