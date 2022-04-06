import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchActionCreators from "../modules/search";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const { setCatList, setAutoComplete } = bindActionCreators(
    searchActionCreators,
    dispatch
  );

  return {
    setCatList,
    setAutoComplete,
  };
};

export default useActionCreators;