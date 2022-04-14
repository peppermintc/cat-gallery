import styled from 'styled-components';
import AutoComplete from './AutoComplete';
import SearchForm from './SearchForm';

const Container = styled.section`
  position: relative;
  display: inline-block;
`;

const SearchContainer = () => {
  return (
    <Container>
      <SearchForm />
      <AutoComplete />
    </Container>
  );
};

export default SearchContainer;
