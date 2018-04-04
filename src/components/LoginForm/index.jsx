import React, { Component }   from 'react';
import { loginUser } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => dispatch(loginUser()),
  };
};

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

    console.log(userName, password);
  }

  render () {
    return <div className="col-md-8 offset-md-2 col-10 offset-1">
      <h2 className="mb-5">Login form</h2>
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