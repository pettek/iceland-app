import React, { Component }    from 'react';
import DeparturesList          from '../departures-list/DeparturesList';
import ArrivalsList            from '../arrivals-list/ArrivalsList';
import { fetchFlightsFromApi } from '../../../actions';
import { connect }             from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    fetchFlightsFromApi: () => dispatch(fetchFlightsFromApi()),
  };
};

@connect(null, mapDispatchToProps)
export default class FlightsDashboard extends Component {

  componentDidMount () {
    this.props.fetchFlightsFromApi();
  }

  render () {
    return <div className="row">
      <div className="col-md-6">
        <h1>Departures</h1>
        <DeparturesList/>
      </div>
      <div className="col-md-6">
        <h1>Arrivals</h1>
        <ArrivalsList/>
      </div>
    </div>;
  }
}