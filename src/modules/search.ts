import { Dispatch } from "redux";
import { fetchCatList } from "../api/catApi";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

// Action Types
const SET_CAT_LIST = "SET_CAT_LIST";
const SET_AUTO_COMPLETE = "SET_AUTO_COMPLETE";

// Action Creators
export const setCatList =
  (searchKeyword: string) => async (dispatch: Dispatch) => {
    const response = await fetchCatList(searchKeyword);

    dispatch({
      type: SET_CAT_LIST,
      payload: response ? response.data : [],
    });
  };

export const setAutoComplete =
  (currentInputValue: string) => async (dispatch: Dispatch) => {
    if (currentInputValue.length < 2) {
      dispatch({
        type: SET_AUTO_COMPLETE,
        payload: [],
      });
    } else {
      const response = await fetchCatList(currentInputValue);

      dispatch({
        type: SET_AUTO_COMPLETE,
        payload: response ? response.data : [],
      });
    }
  };

// Initial State
const initialState = {
  catList: [],
  autoComplete: [],
};

// Reducer
const searchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_CAT_LIST:
      return {
        ...state,
        catList: action.payload,
      };
    case SET_AUTO_COMPLETE:
      return {
        ...state,
        autoComplete: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
