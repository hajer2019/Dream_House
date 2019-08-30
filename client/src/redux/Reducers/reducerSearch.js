import { house } from "../../data";

const initialState = { ville: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        ville: action.payload
      };
    default:
      return state;
  }
}
