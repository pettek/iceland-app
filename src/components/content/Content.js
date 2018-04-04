import React, { Component } from 'react';
import ConcertList          from '../concerts/concert-list/ConcertList';
import LandingPage          from '../landing-page/LandingPage';
import { Switch, Route }    from 'react-router-dom';
import SportsDashboard      from '../sports/sports-dashboard/SportsDashboard';
import FlightsDashboard     from '../flights/flights-dashboard/FlightsDashboard';
import CarpoolingDashboard  from '../carpooling/carpooling-dashboard/CarpoolingDashboard';
import Buses                from '../buses';

export default class Content extends Component {
  render () {
    return <div>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/concerts" component={ConcertList}/>
        <Route exact path="/sports" component={SportsDashboard}/>
        <Route exact path="/flights" component={FlightsDashboard}/>
        <Route exact path="/buses" component={Buses}/>
        <Route exact path="/carpooling" component={CarpoolingDashboard}/>
      </Switch>
    </div>;
  }
}