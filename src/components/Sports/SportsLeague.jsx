import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { fetchSportsFromApi } from '../../actions/index';
import SubLeaguesButtons      from './SubLeaguesButtons';
import FixtureList            from './FixtureList';

const mapStateToProps = state => ({
  sports: state.sports,
});

const mapDispatchToProps = dispatch => ({
  fetchSportsFromApi: url => dispatch(fetchSportsFromApi(url)),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class SportsLeague extends Component {
  render() {
    return (
      <div>
        <SubLeaguesButtons league={this.props.league} clickHandler={this.props.clickHandler} />
        <FixtureList league={this.props.league} />
      </div>
    );
  }
}
