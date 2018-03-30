import React, { Component } from 'react';
import './SportsLeague.css';
import FixtureList          from '../fixture-list/FixtureList';

export default class SportsLeague extends Component {
  render () {
    const matches = <p>mecze</p>
    return (<FixtureList matches={matches}/>);
  }
}
