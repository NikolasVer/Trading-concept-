import React, { Component } from 'react';

import Header from "../Header/Header";
import ChartContainer from "../Charter/ChartContainer";
import CurrencyPanel from '../CurrencyPanel/CurrencyPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <ChartContainer />
          <CurrencyPanel />
      </div>
    );
  }
}

export default App;
