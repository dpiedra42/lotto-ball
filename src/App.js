import React, {Component} from 'react';
import './App.css';
import Lottery from './Lottery';

class App extends Component{
  render() {
    return (
      <div className="App">
          <Lottery title="Lottery" numBalls={6} max={40} />
          <Lottery title="Mini Daily" numBalls={4} max={10} />
      </div>
    );
  }
}

export default App;
