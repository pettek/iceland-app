import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import PropTypes              from 'prop-types';
import './Sports.css';
import { fetchSportsFromApi } from '../../actions';
import LeaguesButtons         from './LeaguesButtons';
import SportsLeague           from './SportsLeague';

const mapStateToProps = state => ({
  sports: state.sports,
});

const mapDispatchToProps = dispatch => ({
  fetchSportsFromApi: url => dispatch(fetchSportsFromApi(url)),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Sports extends Component {
  static propTypes = {
    fetchSportsFromApi: PropTypes.func.isRequired,
  };

  /**
   * Turn abc-def (delimiter: -) or abc (delimiter: whitespace) def into Abc Def
   * @param string
   * @param delimiter
   * @returns {string}
   */
  static capitalize(string = '', delimiter = ' ') {
    const exploded = string.split(delimiter);
    return exploded.map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ');
  }

  constructor(props) {
    super(props);
    this.state = { league: '' };
  }

  componentDidMount() {
    this.props.fetchSportsFromApi('/Sports');
  }

  chooseLeague = (choice) => {
    console.log('*');
    this.props.fetchSportsFromApi(choice);
    this.setState({ league: choice });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-3 col-6">
          <LeaguesButtons clickHandler={this.chooseLeague} />
        </div>
        <div className="col-md-9 col-6">
          <SportsLeague league={this.state.league} clickHandler={this.chooseLeague} />
        </div>
      </div>);
  }
}
