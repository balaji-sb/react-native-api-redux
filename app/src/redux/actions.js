export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';

export const setUserName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setPassword = password => dispatch => {
  dispatch({
    type: SET_PASSWORD,
    payload: password,
  });
};
