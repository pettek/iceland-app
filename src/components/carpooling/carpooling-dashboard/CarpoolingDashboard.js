import React, { Component }    from 'react';
import Ride                    from '../ride/Ride';
import { fetchDriversFromApi } from '../../../actions';
import connect                 from 'react-redux/es/connect/connect';

const mapStateToProps = state => ({
  drivers: state.drivers,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchDriversFromApi: () => dispatch(fetchDriversFromApi()),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class CarpoolingDashboard extends Component {

  constructor (props) {
    super(props);
    this.state = {filter: ''};
  }

  componentDidMount () {
    this.props.fetchDriversFromApi();
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
      .map(d => <Ride details={d}/>);

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