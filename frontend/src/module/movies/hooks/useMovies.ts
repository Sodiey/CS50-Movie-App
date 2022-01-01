import { useState, useEffect, ChangeEvent, useCallback } from "react";
import scrollIntoViewIfNeeded from "utils/scroll";
import { Filters, FilterMethod } from "../types";
import { publicFetch } from "api";
import { toast } from "react-toastify";

const ELEMENT_ID = "movies";

const initializeFilters = () => ({
  year: 2021,
});

const useMovies = (moviesList: any) => {
  const [movies, setMovies] = useState<any>(moviesList);
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(10);
  const [filters, setFilters] = useState<Filters>(initializeFilters());

  const handleChangeFilter = useCallback(
    async (event: ChangeEvent<HTMLSelectElement>, method: FilterMethod) => {
      setLoading(true);
      const value = event.target.value;
      switch (method) {
        case FilterMethod.year:
          setFilters({ year: parseInt(value) });
          const { data } = await publicFetch.get(`/movies?year=${value}`);
          setMovies(data.results);
          setLoading(false);
          break;

        default:
          setFilters(initializeFilters());
          setLoading(false);
          break;
      }
    },
    []
  );

  const loadMore = useCallback(async () => {
    const { data } = await publicFetch.get(
      `/movies?year=${filters.year}&offset=${offset}`
    );
    setOffset((prev) => prev + 10);
    setMovies((prev) => [...prev, ...data.results]);
  }, [offset]);

  const handleFavorite = useCallback(
    async ({ movie_id, url_path }: { movie_id: number; url_path: string }) => {
      try {
        const { data } = await publicFetch.post("/movies", {
          movie_id,
          url_path,
        });
        if (data.status === "Success") {
          toast("Added to your favorite list");
        }
      } catch (e) {
        console.log(e);
      }
    },
    []
  );

  useEffect(() => {
    if (!loading) {
      scrollIntoViewIfNeeded(
        document?.getElementById(`${ELEMENT_ID}-${movies?.length - 10}`),
        {
          scrollMode: "always",
          block: "start",
          behavior: "smooth",
          delta: "-140px",
        }
      );
    }
  }, [movies]);

  return {
    movies,
    filters,
    handleChangeFilter,
    loadMore,
    loading,
    handleFavorite,
  };
};
export default useMovies;
export { ELEMENT_ID };
