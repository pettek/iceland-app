import React, { Component }   from 'react';
import { fetchSportsFromApi } from '../../../actions';
import { connect }            from 'react-redux';
import SubLeaguesButtons      from '../sub-leagues-buttons/SubLeaguesButtons';
import FixtureList            from '../fixture-list/FixtureList';

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
