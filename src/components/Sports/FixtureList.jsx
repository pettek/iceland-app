import React, {Component} from 'react';
import { connect }        from 'react-redux';
import Fixture            from './Fixture';

const mapStateToProps = state => ({
  sports: state.sports,
});

@connect(mapStateToProps)
export default class FixtureList extends Component {
  render () {
    let fixtures = [];

    if(this.props.sports[this.props.league]) {
      fixtures = this.props.sports[this.props.league].payload || [];
    }

    const fixturesList = fixtures.map((fix, ind) => <Fixture key={ind} details={fix}/>);

    return <div>{fixturesList}</div>;
  }
}