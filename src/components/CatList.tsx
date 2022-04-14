import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useActionCreators from '../hooks/useActionCreators';
import defaultCatImage from '../img/defaultCat.jpg';
import { RootState } from '../modules';
import { Cat } from '../modules/cat';

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(90, 0, 10, 0.4);
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
  transition: opacity 0.3s;
  opacity: 0;
`;

const CountryFlag = styled.img`
  margin-bottom: 10px;
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
  const { catList } = useSelector((state: RootState) => state.cat);
  const { setCatList } = useActionCreators();

  useEffect(() => {
    setCatList('');
  }, [setCatList]);

  const getCatImageSrc = (catInfo: Cat) => {
    const hasImageObject = catInfo.image !== undefined;
    const hasReferenceImageId = catInfo.reference_image_id !== undefined;

    if (hasImageObject) {
      return catInfo.image?.url;
    }

    if (hasReferenceImageId) {
      return `https://cdn2.thecatapi.com/images/${catInfo.reference_image_id}.jpg`;
    }

    return defaultCatImage;
  };

  const getFlagImageSrc = (catInfo: Cat) =>
    `https://flagcdn.com/24x18/${formatCountryCode(catInfo.country_code)}.png`;

  const formatCountryCode = (inputCountryCode: string): string => {
    let newCountryCode = inputCountryCode.toLowerCase();
    if (newCountryCode === 'sp') newCountryCode = 'es';
    return newCountryCode;
  };

  return (
    <Container>
      {catList.map((catInfo: Cat) => (
        <CatItem key={catInfo.id}>
          <Image src={getCatImageSrc(catInfo)} alt="cat" />
          <BreedName>
            <CountryFlag src={getFlagImageSrc(catInfo)} alt="flag" />
            {catInfo.name}
          </BreedName>
        </CatItem>
      ))}
    </Container>
  );
};

export default CatList;
