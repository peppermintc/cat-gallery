import { Dispatch } from "redux";
import { fetchCatList } from "../api/catApi";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface Cat {
  id: string;
  name: string;
  reference_image_id?: string;
  country_code?: string;
  image?: {
    url: string;
  };
}

export interface CatState {
  catList: Cat[];
  autoComplete: Cat[];
}

// Action Types
const SET_CAT_LIST = "SET_CAT_LIST";
const SET_AUTO_COMPLETE = "SET_AUTO_COMPLETE";

// Action Creators
export const setCatList =
  (searchKeyword: string) => async (dispatch: Dispatch) => {
    const catList: Cat[] = await fetchCatList(searchKeyword);
    dispatch({
      type: SET_CAT_LIST,
      payload: catList,
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
      const autoCompleteList: Cat[] = await fetchCatList(currentInputValue);
      dispatch({
        type: SET_AUTO_COMPLETE,
        payload: autoCompleteList,
      });
    }
  };

// Initial State
const initialState: CatState = {
  catList: [],
  autoComplete: [],
};

// Reducer
const catReducer = (state: CatState = initialState, action: Action) => {
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

export default catReducer;
