import React             from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage       from '../LandingPage/index';
import Sports            from '../../components/Sports/index';
import Flights           from '../../components/Flights/index';
import Buses             from '../../components/Buses/index';
import Carpooling        from '../../components/Carpooling/index';
import Concerts          from '../../components/Concerts/index';
import LoginForm         from '../../components/LoginForm';
import Playground        from '../../components/Playground';

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/concerts" component={Concerts} />
      <Route exact path="/sports" component={Sports} />
      <Route exact path="/flights" component={Flights} />
      <Route exact path="/buses" component={Buses} />
      <Route exact path="/carpooling" component={Carpooling} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/playground" component={Playground} />
    </Switch>
  </div>
);

export default Content;
