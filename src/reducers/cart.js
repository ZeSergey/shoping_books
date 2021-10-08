const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        items: [...state.items,
        action.payload],
      };
    case "REMOVE_BOOK":
      return {
        ...state,
        isReady: state.items.filter(o => o.id !== action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;