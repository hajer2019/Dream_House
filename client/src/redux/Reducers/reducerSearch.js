import { house } from "../../data";

const initialState = { ville: "", gouvernerat: "", type: "", typebien: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        ville: action.payload.ville,
        gouvernerat: action.payload.gouvernerat,
        type: action.payload.type,
        typebien: action.payload.typebien
      };
    default:
      return state;
  }
}
