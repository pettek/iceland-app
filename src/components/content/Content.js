import React, { Component } from 'react';
import './Content.css';
import ConcertList          from '../concert-list/ConcertList';
import LandingPage          from '../landing-page/LandingPage';
import { Switch, Route }           from 'react-router-dom';

export default class Content extends Component {
  render () {
    return <div>
      <Switch>
        <Route exact path="/" render={() => <LandingPage/>} />
        <Route exact path="/concerts" render={() => <ConcertList/> } />
      </Switch>
    </div>;
  }
}