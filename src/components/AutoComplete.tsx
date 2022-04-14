import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useActionCreators from '../hooks/useActionCreators';
import { RootState } from '../modules';
import { Cat } from '../modules/cat';

const List = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 13.5rem;
  background-color: #f5f5f5;
  z-index: 10;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Item = styled.div`
  background: none;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & + & {
    border-top: 1px solid #ddd;
  }

  &:hover {
    background-color: #fff;
    color: dodgerblue;
  }
`;

const AutoComplete = () => {
  const { autoComplete } = useSelector((state: RootState) => state.cat);
  const { setCatList, setAutoComplete } = useActionCreators();

  const onItemClick = (cat: Cat) => {
    setCatList(cat.name);
    setAutoComplete('');
  };

  return (
    <>
      {autoComplete.length > 0 && (
        <List>
          {autoComplete.map((cat: Cat) => (
            <Item key={cat.id} onClick={() => onItemClick(cat)}>
              {cat.name}
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default AutoComplete;
