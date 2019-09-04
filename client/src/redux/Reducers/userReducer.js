import jwt from "jwt-decode";

const initialState = {
  isAuth: false,
  user: {}
};

export default function(state = initialState, action) {
  const token = localStorage.getItem("jwtToken");
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state
      };
    case "SET_USER":
      if (action.payload) {
        return {
          ...state,
          isAuth: true,
          user: jwt(action.payload)
        };
      }
    case "LOG_OUT":
      return {
        ...state,
        isAuth: false,
        user: {}
      };
    default:
      return state;
  }
}
