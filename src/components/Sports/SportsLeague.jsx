import React, { Component }   from 'react';
import { fetchSportsFromApi } from '../../actions/index';
import { connect }            from 'react-redux';
import SubLeaguesButtons      from './SubLeaguesButtons';
import FixtureList            from './FixtureList';

const mapStateToProps = state => ({
  sports: state.sports,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSportsFromApi: (url) => dispatch(fetchSportsFromApi(url)),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SportsLeague extends Component {

  render () {
    return (
      <div>
        <SubLeaguesButtons league={this.props.league} clickHandler={this.props.clickHandler}/>
        <FixtureList league={this.props.league}/>
      </div>
    );
  }
}
