import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import * as searchActionCreators from "../modules/search";

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
  const { searchKeyword, catList } = useSelector(
    (state: RootStateOrAny) => state.search
  );

  const dispatch = useDispatch();
  const { setCatList } = bindActionCreators(searchActionCreators, dispatch);

  useEffect(() => {
    setCatList(searchKeyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword]);

  return (
    <Container>
      {catList.map((catInfo: any) => (
        <Item key={catInfo.id}>{catInfo.name}</Item>
      ))}
    </Container>
  );
};

export default CatList;
