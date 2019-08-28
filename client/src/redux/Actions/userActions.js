import axios from "axios";
import setAuth from "../../utils/setAuth";
import jwt from "jwt-decode";

export const userSignup = user => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios.post("/api/user/register", user, config).then(res =>
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
    localStorage.setItem("jwtToken", token);
    setAuth(token);
    dispatch(setUser(jwt(token)));
  });
};

export const setUser = user => dispatch => {
  return dispatch({
    type: "SET_USER",
    user
  });
};

export const logOut = () => dispatch => {
  setUser({});
  localStorage.removeItem("jwtToken");
};
