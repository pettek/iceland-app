import React, { Component } from 'react';
import Ride                 from './Ride';
import { getDrivers }       from '../../actions/index';
import { connect }          from 'react-redux';

const mapStateToProps = state => ({
  drivers: state.drivers,
});

const mapDispatchToProps = dispatch => {
  return {
    getDrivers: () => dispatch(getDrivers()),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Carpooling extends Component {

  constructor (props) {
    super(props);
    this.state = {filter: ''};
  }

  componentDidMount () {
    this.props.getDrivers();
  }

  handleChange (e) {
    this.setState({filter: e.target.value.toLowerCase()});
  }

  render () {
    const rides = this.props.drivers
      .filter(d => {
        const filter = this.state.filter.replace(/ /g,'');

        return d.from.toLowerCase().includes(filter) ||
        d.to.toLowerCase().includes(filter)
      })
      .map(d => <Ride key={d.link} details={d}/>);

    return <div>
      <h1>Find your drive</h1>
      From/To
      <input
        type="text"
        className="form-control"
        value={this.state.filter}
        onChange={this.handleChange.bind(this)}
      />
      <div className="container">
        {rides}
      </div>
    </div>;
  }
}