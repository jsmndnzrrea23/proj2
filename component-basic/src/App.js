import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.yourName = "Jessmond";
    this.state = {};
  }

sayHello(name){
  return "Hello " + name;
}

  render() {
    const myName = "jess";
    return (
      <div className="App">
        <h2>Sample data: { this.yourName }</h2>
      </div>
    );
  }
}

export default App;
