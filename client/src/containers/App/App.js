import React, { Component } from 'react';
import './App.css';
import ChartContainer from "../ChartContainer";
import Header from "../Header/Header";
import CurrencyPanel from '../CurrencyPanel/CurrencyPanel';

class App extends Component {

  componentWillMount() {
    console.log('App Did mount')
  }

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
