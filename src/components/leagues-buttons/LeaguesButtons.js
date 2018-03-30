import React, { Component } from 'react';
import './LeaguesButtons.css';
import { connect }          from 'react-redux';

const mapStateToProps = state => ({
  sports: state.sports,
});

@connect(mapStateToProps)
export default class LeaguesButtons extends Component {
  render () {

    const leagueButtons = (groupName, subleagues) => (
      <div>
        {console.log(subleagues)}
        <p key={groupName}>{groupName}</p>
        {Object.keys(subleagues).map(subleague => (
          <button className="btn"
                  key={subleague}>{subleague}</button>
        ))}
      </div>
    );

    const buttons = Object.keys(this.props.sports).map(league => (
      (Array.isArray(this.props.sports[league])) ?
        <div><button className="btn btn-block"
                key={league}>{league}</button></div> :
        leagueButtons(league, this.props.sports[league])
    ));

    return (
      <div>
        {buttons}
      </div>
    );
  }
}