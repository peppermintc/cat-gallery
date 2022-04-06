import { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";
import defaultCatImage from "../img/defaultCat.jpg";

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
  const { catList } = useSelector((state: RootStateOrAny) => state.cat);
  const { setCatList } = useActionCreators();

  useEffect(() => {
    setCatList("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {catList.map((catInfo: any) => (
        <CatItem key={catInfo.id}>
          <Image
            src={
              catInfo.image
                ? catInfo.image.url
                : catInfo.reference_image_id
                ? `https://cdn2.thecatapi.com/images/${catInfo.reference_image_id}.jpg`
                : defaultCatImage
            }
            alt="cat"
          />
          <BreedName>{catInfo.name}</BreedName>
        </CatItem>
      ))}
    </Container>
  );
};

export default CatList;
