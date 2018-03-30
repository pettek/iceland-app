import React, { Component } from 'react';
import './Content.css';
import ConcertList          from '../concert-list/ConcertList';
import LandingPage          from '../landing-page/LandingPage';
import { Switch, Route }    from 'react-router-dom';
import SportsDashboard      from '../sports-dashboard/SportsDashboard';

export default class Content extends Component {
  render () {
    return <div>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/concerts" component={ConcertList}/>
        <Route exact path="/sports" component={SportsDashboard}/>
      </Switch>
    </div>;
  }
}