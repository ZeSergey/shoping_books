const initialState = {
  isReady: false,
  items: null,
  filterBy: 'all',
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
    case "SET_FILTER":
      return {
        ...state,
        filterBy: action.payload,
        isReady: true
      };
    case "SET_IS_READY":
      return {
        ...state,
        isReady: action.payload
      };
    default:
      return state;
  }
};

export default booksReducer;