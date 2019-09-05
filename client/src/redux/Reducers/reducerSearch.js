const initialState = {
  ville: "",
  gouvernerat: "",
  categorie: "",
  typebien: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        ville: action.payload.ville,
        gouvernerat: action.payload.gouvernerat,
        categorie: action.payload.categorie,
        typebien: action.payload.typebien
      };
    default:
      return state;
  }
}
