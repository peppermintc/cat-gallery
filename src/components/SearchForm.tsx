import { ChangeEvent, FormEvent, useRef } from "react";
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

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("onFormSubmit");

    if (!searchInputRef.current) return;
    searchInputRef.current.value = "";
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("onInputChange", e.target.value);
  };

  const onButtonClick = () => {
    console.log("onButtonClick");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <SearchInput type="text" ref={searchInputRef} onChange={onInputChange} />
      <SearchButton onClick={onButtonClick}>Search</SearchButton>
    </form>
  );
};

export default SearchForm;
