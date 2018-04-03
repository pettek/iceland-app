import React, { Component }   from 'react';
import './SportsDashboard.css';
import { fetchSportsFromApi } from '../../../actions';
import { connect }            from 'react-redux';
import LeaguesButtons         from '../leagues-buttons/LeaguesButtons';

const mapStateToProps = state => ({
  sports: state.sports,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSportsFromApi: () => dispatch(fetchSportsFromApi()),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SportsDashboard extends Component {
  /**
   * Turn abc-def (delimiter: -) or abc (delimiter: whitespace) def into Abc Def
   * @param string
   * @param delimiter
   * @returns {string}
   */
  static capitalize (string = '', delimiter = ' ') {

    const exploded = string.split(delimiter);
    return exploded.map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
  }

  componentDidMount () {
    this.props.fetchSportsFromApi();
  }

  render () {

    return (
      <div className="row">
        <div className="col-md-3 col-6">
          <LeaguesButtons />
        </div>
        <div className="col-md-9 col-6">
          ...
        </div>
      </div>);
  }
}