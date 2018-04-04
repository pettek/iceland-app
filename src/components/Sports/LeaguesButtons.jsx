import React, { Component } from 'react';
import { connect }          from 'react-redux';
import SportsDashboard      from './index';

const mapStateToProps = state => ({
  sports: state.sports,
});

@connect(mapStateToProps)
export default class LeaguesButtons extends Component {
  render () {

    const buttons = Object.keys(this.props.sports)
                          .filter(league => this.props.sports[league].label)
                          .map(league => (
        <div key={league}>
          <button className="btn btn-block"
                  onClick={() => this.props.clickHandler(league)}>
            {SportsDashboard.capitalize(this.props.sports[league].label, '-')}
            </button>
        </div>
    ));

    return (
      <div>
        {buttons}
      </div>
    );
  }
}