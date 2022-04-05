import styled from "styled-components";

const Container = styled.div`
  margin: 30px auto 0 auto;
  width: 1024px;
  background-color: yellow;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

const Item = styled.div`
  background-color: green;
`;

const CatList = () => {
  return (
    <Container>
      <Item>asdf</Item>
      <Item>asdf</Item>
      <Item>asdf</Item>
      <Item>asdf</Item>
      <Item>asdf</Item>
    </Container>
  );
};

export default CatList;
