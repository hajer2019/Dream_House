import axios from "axios";
import jwt from "jwt-decode";
export const userSignup = user => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios.post("api/user/register", user, config).then(res =>
    dispatch({
      type: "SIGN_UP",
      payload: res.data
    })
  );
};

export const userSignin = data => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios.post("/api/user/login", data, config).then(res => {
    const token = res.data.token;
    if (token) {
      localStorage.setItem("jwtToken", token);
      dispatch(setUser(token));
      console.log(jwt(token));
    }
  });
};

export const setUser = token => dispatch => {
  return dispatch({
    type: "SET_USER",
    payload: token
  });
};

export const logOut = payload => dispatch => {
  localStorage.removeItem("jwtToken");
  return dispatch({
    type: "LOG_OUT",
    payload
  });
};
