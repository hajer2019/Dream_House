import { house } from "../../data";

const initialState = { house: house };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH": {
      return {
        ...state,
        house: state.house.filter((e, i) => e.ville === action.payload.villes)
      };
    }
    default:
      return state;
  }
}
