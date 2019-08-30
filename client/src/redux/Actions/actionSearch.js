export const search = value => dispatch => {
  dispatch({ type: "SEARCH", payload: value });
};
