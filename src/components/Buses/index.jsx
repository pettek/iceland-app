import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import { getBuses }         from '../../actions';
import Map                  from './Map';

const mapStateToProps = state => ({
  buses: state.buses,
});

const mapDispatchToProps = dispatch => ({
  getBuses: () => dispatch(getBuses()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Buses extends Component {
  static propTypes = {
    buses: PropTypes.arrayOf({
      position: PropTypes.shape({
        lat: PropTypes.string,
        lon: PropTypes.string,
      }),
      route: PropTypes.string,
    }).isRequired,
    getBuses: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.intervalId = setInterval(() => this.props.getBuses(), 5000);
    this.props.getBuses();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <Map buses={this.props.buses} />;
  }
}

