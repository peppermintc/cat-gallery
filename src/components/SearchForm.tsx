import { ChangeEvent, FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchActionCreators from "../modules/search";
import styled from "styled-components";

const SearchInput = styled.input`
  width: 12.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 0.125rem 0.5rem;
  border: 0.125rem solid #ccc;
  border-radius: 0.25rem;
`;

const SearchButton = styled.button`
  background-color: dodgerblue;
  color: white;
  height: 2rem;
  margin-left: 0.3125rem;
  padding: 0 1rem;
  border: none;
  border-radius: 0.3125rem;
  outline: none;
  cursor: pointer;
`;

const SearchForm = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const { setCatList, setAutoComplete } = bindActionCreators(
    searchActionCreators,
    dispatch
  );

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchInputRef.current) return;
    setCatList(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setAutoComplete(inputValue);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <SearchInput type="text" ref={searchInputRef} onChange={onInputChange} />
      <SearchButton>Search</SearchButton>
    </form>
  );
};

export default SearchForm;
