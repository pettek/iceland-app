import React, { Component }  from 'react';
import { getBuses } from '../../actions';
import { connect }           from 'react-redux';
import { MapComponent }      from './map-component';

const mapDispatchToProps = dispatch => {
  return {
    getBuses: () => dispatch(getBuses()),
  };
};

@connect(null, mapDispatchToProps)
export default class Buses extends Component {

  componentWillMount () {
    this.intervalId = setInterval(() => this.props.getBuses(), 5000);
    this.props.getBuses();
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }

  render () {
    return <div>
      <MapComponent/>
    </div>;
  }
}





