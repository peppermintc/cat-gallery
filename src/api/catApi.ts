import axios from "axios";

export const fetchCatList = async (searchKeyword: string) => {
  if (searchKeyword === "") {
    return await axios
      .get("https://api.thecatapi.com/v1/breeds")
      .catch(console.error);
  } else {
    return await axios
      .get("https://api.thecatapi.com/v1/breeds/search", {
        params: {
          q: searchKeyword,
        },
      })
      .catch(console.error);
  }
};
