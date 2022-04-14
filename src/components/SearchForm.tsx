import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import useActionCreators from '../hooks/useActionCreators';

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
  const [inputValue, setInputValue] = useState('');

  const { setCatList, setAutoComplete } = useActionCreators();

  const resetSearchInput = () => setInputValue('');
  const resetAutoComplete = () => setAutoComplete('');

  const debounceSetAutoComplete = useMemo(
    () => debounce((newInputValue) => setAutoComplete(newInputValue), 200),
    [setAutoComplete],
  );

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCatList(inputValue);
    resetSearchInput();
    resetAutoComplete();
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    debounceSetAutoComplete(newInputValue);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <SearchInput type="text" onChange={onInputChange} value={inputValue} />
      <SearchButton>Search</SearchButton>
    </form>
  );
};

export default SearchForm;
