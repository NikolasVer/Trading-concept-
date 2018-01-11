import React, { PureComponent } from 'react';

// Components
import AsideMenu from '../AsideMenu/index';
import MainWrapper from '../MainWrapper/index';

// Styles
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <AsideMenu />
        <MainWrapper />
      </div>
    );
  }
}

export default App;
