import React, { Component } from 'react';
import './App.css';
import Header               from './containers/Header/index';
import Content              from './containers/Content/index';

class App extends Component {
  render () {
    return (
      <div>
      <Header/>
        <div className="container">
          <Content/>
        </div>
      </div>
    );
  }
}

export default App;
