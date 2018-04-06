const users = [
  { userName: 'user', password: 'password' },
  { userName: 'aaa', password: 'bbb' },
];

const login = loginData => dispatch => dispatch({
  type: 'LOGIN_USER',
  payload: (new Promise((resolve, reject) => {
    users.forEach((user) => {
      if (user.userName === loginData.userName &&
        user.password === loginData.password) {
        resolve(user);
      } else {
        reject(new Error('Wrong username and/or password'));
      }
    });
  })).then(r => r)
    .catch(error => error.message),
});

export default login;
