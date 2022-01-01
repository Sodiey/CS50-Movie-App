import MovieItem from "./components/MovieItem";
import { Wrapper, Section, Button, ResultSection } from "./styled";
import useMovies, { ELEMENT_ID } from "./hooks/useMovies";
import { FullWidthInner } from "layout/PageLayout";
import Filter from "./components/Filter";
import { MovieType } from "types";

type CatalogProps = {
  moviesList: MovieType[];
  filterOptions: number[];
  totalMovies: number;
};

const MoviesContent = ({
  moviesList,
  filterOptions,
  totalMovies,
}: CatalogProps) => {
  const {
    movies,
    filters,
    handleChangeFilter,
    loading,
    loadMore,
    handleFavorite,
  } = useMovies(moviesList);

  return (
    <>
      <Filter
        handleChangeFilter={handleChangeFilter}
        filterOptions={{
          years: filterOptions,
        }}
        filters={filters}
      />
      <FullWidthInner>
        <ResultSection>
          <span>
            {movies.length} / {totalMovies}
          </span>
        </ResultSection>
        <Section>
          <Wrapper>
            {movies?.map((movie, i) => (
              <MovieItem
                elementId={`${ELEMENT_ID}-${i}`}
                movie={movie}
                key={i}
                handleFavorite={handleFavorite}
              />
            ))}
          </Wrapper>
          <Button onClick={loadMore} disabled={false} isLoading={loading}>
            Load more
          </Button>
        </Section>
      </FullWidthInner>
    </>
  );
};
export default MoviesContent;
