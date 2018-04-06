const users = [
  { userName: 'user', password: 'password' },
  { userName: 'aaa', password: 'bbb' },
];

/* eslint-disable prefer-promise-reject-errors */

const login = loginData => dispatch => dispatch({
  type: 'LOGIN_USER',
  payload: (new Promise((resolve, reject) => {
    users.forEach((user) => {
      if (user.userName === loginData.userName &&
        user.password === loginData.password) {
        resolve(user);
      } else {
        reject({ message: 'Wrong username and/or password' });
      }
    });
  })).then(r => r),
});

export default login;
