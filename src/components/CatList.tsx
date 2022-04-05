import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import * as searchActionCreators from "../modules/search";
import defaultCatImage from "../img/defaultCat.jpeg";

const Image = styled.img`
  width: 100%;
`;

const BreedName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(90, 0, 10, 0.4);
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
  transition: opacity 0.3s;
  opacity: 0;
`;

const CatItem = styled.div`
  position: relative;

  &:hover ${BreedName} {
    opacity: 1;
  }
`;

const Container = styled.div`
  margin: 30px auto 0 auto;
  width: 1024px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
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
        <CatItem key={catInfo.id}>
          <Image
            src={catInfo.image ? catInfo.image.url : defaultCatImage}
            alt="cat"
          />
          <BreedName>{catInfo.name}</BreedName>
        </CatItem>
      ))}
    </Container>
  );
};

export default CatList;
