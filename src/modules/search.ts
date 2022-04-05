import { Dispatch } from "redux";
import { fetchCatList } from "../api/catApi";

// Types
interface Action {
  type: string;
  payload: [];
}

// Action Types
const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";
const SET_CAT_LIST = "SET_CAT_LIST";

// Action Creators
export const setSearchKeyword =
  (newSearchKeyword: string) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SEARCH_KEYWORD,
      payload: newSearchKeyword,
    });
  };

export const setCatList =
  (newSearchKeyword: string) => async (dispatch: Dispatch) => {
    const response = await fetchCatList(newSearchKeyword);

    dispatch({
      type: SET_CAT_LIST,
      payload: response ? response.data : [],
    });
  };

// Initial State
const initialState = {
  searchKeyword: "",
  catList: [],
};

// Reducer
const searchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload,
      };
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
