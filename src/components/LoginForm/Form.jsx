import React from 'react';

export const Form = (props) => (
  <form action="#" onSubmit={props.onSubmit}>
    <div className="form-group">
      Login
      <input type="text" className="form-control" ref={props.loginRef}/>
    </div>
    <div className="form-group">
      Password
      <input type="password" className="form-control" ref={props.passwordRef}/>
    </div>
    <button type="submit" className="btn btn-block mt-4">Login</button>
  </form>
);