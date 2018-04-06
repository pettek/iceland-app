import React   from 'react';
import './App.css';
import Header  from './containers/Header/index';
import Content from './containers/Content/index';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Content />
    </div>
  </div>
);

export default App;
