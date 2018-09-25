import React, { Component } from 'react';
import './App.css';
import { getTime } from './queries';

class App extends Component {
  state = {time: '???'};

  async componentDidMount() {
    const time = await getTime();
    this.setState({time: time.toLocaleString()});
  }

  render() {
    const {time} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GraphQL Example</h1>
        </header>
        <p className="App-intro">
          Time: <strong>{time}</strong>
        </p>
      </div>
    );
  }
}

export default App;
