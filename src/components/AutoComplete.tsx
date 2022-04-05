import { MouseEvent } from "react";
import styled from "styled-components";

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
  const data: any[] = [{ id: 0 }]; // type 수정 필요

  const onItemClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log("onItemClick", e.target);
  };

  return (
    <>
      {data.length > 0 && (
        <List>
          {data.map((item) => (
            <Item key={item.id} onClick={onItemClick}>
              asdf
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default AutoComplete;
