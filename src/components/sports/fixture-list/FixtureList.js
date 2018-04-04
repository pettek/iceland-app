import React, {Component} from 'react';
import { connect }        from 'react-redux';
import Fixture            from '../fixture/Fixture';

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

    const fixturesList = fixtures.map(fix => <Fixture details={fix}/>);

    return <div>{fixturesList}</div>;
  }
}