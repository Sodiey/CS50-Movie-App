import { movieDBFetch } from "api";

const API_KEY = process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_KEY;

const movieDbActions = {
  getConfig: async (): Promise<any> => {
    const res = await movieDBFetch.get(`/configuration?api_key=${API_KEY}`);
    return res;
  },
  serachMovie: async (movie: string): Promise<any> => {
    const res = await movieDBFetch.get(
      `/search/movie?api_key=${API_KEY}&query=${movie}`
    );
    return res;
  },
  getImage: async (movie_id: number): Promise<any> => {
    const res = await movieDBFetch.get(
      `/movie/${movie_id}/images?api_key=${API_KEY}`
    );
    return res;
  },
};

export default movieDbActions;
