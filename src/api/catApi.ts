import axios from 'axios';

export const fetchCatList = async (searchKeyword: string) => {
  if (searchKeyword === '') {
    return await axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then((response) => response.data)
      .catch(console.error);
  } else {
    return await axios
      .get('https://api.thecatapi.com/v1/breeds/search', {
        params: {
          q: searchKeyword,
        },
      })
      .then((response) => response.data)
      .catch(console.error);
  }
};
