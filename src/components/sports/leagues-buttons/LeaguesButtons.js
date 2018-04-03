import React, { Component } from 'react';
import { connect }          from 'react-redux';
import SportsDashboard      from '../sports-dashboard/SportsDashboard';

const mapStateToProps = state => ({
  sports: state.sports,
});

@connect(mapStateToProps)
export default class LeaguesButtons extends Component {
  render () {

    const buttons = Object.keys(this.props.sports).map(league => (
        <div>
          <button className="btn btn-block"
                  key={league}
                  onClick={() => this.props.clickHandler(league)}>
            {this.props.sports[league].label}
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