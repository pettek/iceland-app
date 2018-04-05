import React, { Component } from 'react';
import { loginUser }        from '../../actions';
import { connect }          from 'react-redux';
import { Redirect }         from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (loginData) => dispatch(loginUser(loginData)),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.loginField = React.createRef();
    this.passwordField = React.createRef();
  }

  loginUser (e) {
    const [userName, password] = [
      this.loginField.current.value,
      this.passwordField.current.value];

    e.preventDefault();
    this.props.loginUser({userName, password});
  }

  renderRedirect () {
    if (this.props.user.userName) {
      return <Redirect to='/'/>;
    }
  }

  renderAlert () {
    if(this.props.user.error) {
      return <div className="alert alert-danger" role="alert">
        {this.props.user.error}
      </div>;
    }
  }

  render () {
    return <div className="col-md-8 offset-md-2 col-10 offset-1">
        {this.renderRedirect()}
      <h2 className="mb-5">Login form</h2>
      {this.renderAlert()}
      <form action="#" onSubmit={this.loginUser.bind(this)}>
        <div className="form-group">
          Login
          <input type="text" className="form-control" ref={this.loginField}/>
        </div>
        <div className="form-group">
          Password
          <input type="password" className="form-control" ref={this.passwordField}/>
        </div>
        <button type="submit" className="btn btn-block mt-4">Login</button>
      </form>
    </div>
  }
}