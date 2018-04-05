import React, { Component }   from 'react';
import { LoginButton }        from './LoginButton';
import { LoggedInUserButton } from './LoggedInUserButton';
import { connect }            from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
});

@connect(mapStateToProps)
export default class UserStatus extends Component {
  render () {
    return (this.props.user.userName) ?
      <LoggedInUserButton userName={this.props.user.userName}/> :
      <LoginButton/>;
  }
}