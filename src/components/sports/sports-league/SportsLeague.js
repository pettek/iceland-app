import React, { Component }   from 'react';
import { fetchSportsFromApi } from '../../../actions';
import { connect }            from 'react-redux';

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
        <p>buttons</p>
        <h2>{this.props.league}</h2>
      </div>
    );
  }
}
