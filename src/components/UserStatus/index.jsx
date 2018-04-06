import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { LoginButton }        from './LoginButton';
import LoggedInUserButton  from './LoggedInUserButton';

const mapStateToProps = state => ({
  user: state.user,
});

@connect(mapStateToProps)
export default class UserStatus extends Component {
  render() {
    return (this.props.user.userName) ?
      <LoggedInUserButton userName={this.props.user.userName} /> :
      <LoginButton />;
  }
}
