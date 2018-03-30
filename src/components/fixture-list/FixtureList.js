import React, { Component } from 'react';
import './FixtureList.css';
import Fixture              from '../fixture/Fixture';

export default class FixtureList extends Component {
  render () {
    // const fixtures = this.props.matches.map((fixture, index) => (
    //   <Fixture key={index} details={fixture}/>
    // ));
    const fixtures = <h1>fixture</h1>;

    return (
      <div>
        {fixtures}
      </div>
    );
  }
}