import { ADD_TO_CART } from "../Actions/addfav";
import { house } from "../../data";

const initState = { addedItems: [], items: house };
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === "ADD_TO_CART") {
    let addedItem = state.items.find(item => item.id === action.id);
    return {
      ...state,
      addedItems: [...state.addedItems, addedItem]
    };
  } else {
    return state;
  }
};

export default cartReducer;
