const initialState = {
  annonces: [],
  annonce: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        annonces: [...state.annonces, action.payload]
      };
    case "GET_POSTS":
      return {
        ...state,
        annonces: action.payload
      };
    case "GET_POST":
      return {
        ...state,
        annonce: action.payload
      };
    default:
      return state;
  }
}
