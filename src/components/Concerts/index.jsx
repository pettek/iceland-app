import React, { Component } from 'react';
import { connect }          from 'react-redux';
import shortid              from 'shortid';
import { getConcerts }      from '../../actions/index';
import Concert              from './Concert';

const mapStateToProps = state => ({
  concerts: state.concerts,
});

const mapDispatchToProps = dispatch => ({
  getConcerts: () => dispatch(getConcerts()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Concerts extends Component {
  componentDidMount() {
    this.props.getConcerts();
  }

  render() {
    const concerts = this.props.concerts.filter(concert => concert)
      .map(concert => (
        <Concert key={shortid.generate()} details={concert} />
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
