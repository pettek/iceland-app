import React, { Component }     from 'react';
import { fetchConcertsFromApi } from '../../../actions';
import { connect }              from 'react-redux';
import Concert                  from '../concert/Concert';

const mapStateToProps = state => ({
  concerts: state.concerts
});

const mapDispatchToProps = dispatch => {
  return {
    fetchConcertsFromApi: () => dispatch(fetchConcertsFromApi())
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class ConcertList extends Component {
  componentDidMount () {
    this.props.fetchConcertsFromApi();
  }

  render () {
    const concerts = this.props.concerts.map((concert, index) => (
      <Concert key={index} details={concert}/>
    ));

    return (
      <div>
        <h2>
          Concerts
        </h2>
        {concerts}
      </div>
      );
  }
}