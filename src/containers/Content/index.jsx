import React, { Component } from 'react';
import LandingPage          from '../LandingPage/index';
import { Switch, Route }    from 'react-router-dom';
import SportsDashboard      from '../../components/Sports/index';
import FlightsDashboard     from '../../components/Flights/index';
import Buses                from '../../components/Buses/index';
import Carpooling           from '../../components/Carpooling/index';
import Concerts             from '../../components/Concerts/index';

export default class Content extends Component {
  render () {
    return <div>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/concerts" component={Concerts}/>
        <Route exact path="/sports" component={SportsDashboard}/>
        <Route exact path="/flights" component={FlightsDashboard}/>
        <Route exact path="/buses" component={Buses}/>
        <Route exact path="/carpooling" component={Carpooling}/>
      </Switch>
    </div>;
  }
}