// Types
interface Action {
  type: string;
  payload: [];
}

// Action Types
const SET_CAT_LIST = "SET_CAT_LIST";

// Action Creators

// Initial State
const initialState = {
  catList: [],
};

// Reducer
const searchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_CAT_LIST:
      return {
        ...state,
        catList: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
