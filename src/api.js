import axios from "axios";

export const getMovieSearch = async (input) => {
  const movie = await axios.get(
    `${import.meta.env.VITE_BASEURL}?apikey=${
      import.meta.env.VITE_APIKEY
    }&s=${input}`
  );
  console.table(movie.data.Search);
  return movie.data.Search;
};

export const getMovieById = async (id) => {
  const movieById = await axios.get(
    `${import.meta.env.VITE_BASEURL}?apikey=${
      import.meta.env.VITE_APIKEY
    }&i=${id}`
  );
  return movieById.data;
};
