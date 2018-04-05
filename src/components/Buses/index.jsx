import React, { Component } from 'react';
import { getBuses }         from '../../actions';
import { connect }          from 'react-redux';
import { Map }              from './Map';

const mapStateToProps = state => ({
  buses: state.buses,
});

const mapDispatchToProps = dispatch => {
  return {
    getBuses: () => dispatch(getBuses()),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Buses extends Component {

  componentWillMount () {
    this.intervalId = setInterval(() => this.props.getBuses(), 5000);
    this.props.getBuses();
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }

  render () {
    return <Map buses={this.props.buses}/>;
  }
}





