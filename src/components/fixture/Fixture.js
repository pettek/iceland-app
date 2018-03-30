import React, { Component } from 'react';
import './Fixture.css';

export default class Fixture extends Component {
  render() {
    const date = this.props.details.date || this.props.details.Date || '';
    const time = this.props.details.time || this.props.details.Time || '';
    const location = this.props.details.location || this.props.details.Venue ||
      '';
    let teamsMerge;
    if (this.props.details.homeTeam && this.props.details.awayTeam) {
      teamsMerge = this.props.details.homeTeam + ' - ' +
        this.props.details.awayTeam;
    }
    const teams = teamsMerge || this.props.details.teams ||
      this.props.details.Teams;

    return <div className="fixture">
      <p>{teams}</p>
      <p>Date: {date} Time: {time}</p>
      <p>Place: {location}</p>
    </div>
  }
}