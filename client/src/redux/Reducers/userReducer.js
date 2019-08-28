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
      return {
        ...state,
        isAuth: true,
        user: action.user
      };
    default:
      return state;
  }
}
