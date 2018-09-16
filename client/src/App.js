import React, { Component } from 'react';
import './App.css';
import { getMessage } from './queries';

class App extends Component {
  state = {message: '???'};

  async componentDidMount() {
    const message = await getMessage();
    this.setState({message});
  }

  render() {
    const {message} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GraphQL Example</h1>
        </header>
        <p className="App-intro">
          Message: <strong>{message}</strong>
        </p>
      </div>
    );
  }
}

export default App;
