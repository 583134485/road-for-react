import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  render() {
    const helloWorld = "Welcome to the Road to learn React hot";
    // helloWorld = 'Bye Bye React';

    const helloWorld2 = {
      text: "Welcome to the Road to learn React"
    };
    helloWorld2.text = "Bye Bye React";
    // allowed
    const helloWorld3 = {
      text: "Welcome to the Road to learn React"
    };
    helloWorld3.text = "Bye Bye React";
    return (
      <div className="App">
        <h2>welcome to the road to learn react</h2>
        <h2>{helloWorld}</h2>
        {list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        ))}
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
