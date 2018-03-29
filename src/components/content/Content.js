import React, { Component } from 'react';
import './Content.css';
import Concerts from '../concerts/Concerts';

export default class Content extends Component {
  render () {
    return <div>
      <Concerts/>
    </div>;
  }
}