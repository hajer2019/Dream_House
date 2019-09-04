const initialState = {
  isAuth: false,
  user: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state
      };
    case "SET_USER":
      if (action.payload) {
        return {
          ...state,
          isAuth: true
        };
      } else {
        return {
          ...state
        };
      }
    case "LOG_OUT":
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
}
