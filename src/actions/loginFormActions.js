const users = [
  {userName: 'user', password: 'password'},
  {userName: 'aaa', password: 'bbb'}
];

export const loginUser = (loginData) => {
  return (dispatch) => {
    return dispatch({
      type: 'LOGIN_USER',
      payload: (new Promise((resolve, reject) => {
        users.forEach(user => {
          if (user.userName === loginData.userName &&
            user.password === loginData.password) {
            resolve(user);
          }
        });
        reject('Wrong username and/or password');
      })).then(r => r),
    });
  };
};