import React, {Component}    from 'react';
import { fetchBusesFromApi } from '../../../actions';
import { connect }           from 'react-redux';

const mapStateToProps = state => ({
  buses: state.buses
});

const mapDispatchToProps = dispatch => {
  return {
    fetchBusesFromApi: () => dispatch(fetchBusesFromApi()),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class BusesDashboard extends Component {

  componentDidMount () {
    this.props.fetchBusesFromApi();
  }

  render () {
    return <h1>Buses!!</h1>;
  }
}