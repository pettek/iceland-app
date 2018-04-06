import React, { Component } from 'react';
import { connect }        from 'react-redux';
import SportsDashboard    from './index';

const mapStateToProps = state => ({
  sports: state.sports,
});

@connect(mapStateToProps)
export default class SubLeaguesButtons extends Component {
  render() {
    const buttons = this.props.sports[this.props.league];

    let buttonsList = [];
    if (buttons) {
      buttonsList = Object.keys(buttons)
        .filter(b => (b !== 'payload' && b !== 'label'))
        .map(b => (
          <button
            key={b}
            className="btn"
            onClick={() => this.props.clickHandler(b)}
          >{SportsDashboard.capitalize(buttons[b].label, '-')}
          </button>));
    }

    return (
      <div>
        {buttonsList}
      </div>);
  }
}
