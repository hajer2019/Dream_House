import { house } from "../../data";

const initialState = { house, housefilter: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case "SEARCH": {
    //   return {
    //     ...state,
    //     housefilter: state.house.filter(
    //       (e, i) => e.ville === action.payload.villes
    //     )
    //   };
    // }
    default:
      return state;
  }
}
