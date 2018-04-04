import React, { Component }     from 'react';
import { getConcerts } from '../../actions/index';
import { connect }              from 'react-redux';
import Concert                  from './Concert';

const mapStateToProps = state => ({
  concerts: state.concerts
});

const mapDispatchToProps = dispatch => {
  return {
    getConcerts: () => dispatch(getConcerts())
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Concerts extends Component {
  componentDidMount () {
    this.props.getConcerts();
  }

  render () {
    const concerts = this.props.concerts
      .filter(concert => concert)
      .map((concert, index) => (
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