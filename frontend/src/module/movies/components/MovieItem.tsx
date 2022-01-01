import { useEffect, useState } from "react";
import { Card, Description, Title, Overlay } from "../styled";
import FavoriteIcon from "icons/FavoriteIcon";
import { StyledImage } from "../styled";
import movieDbActions from "services/movieDbServices";
import { MovieType } from "types";

type movie = {
  movie: MovieType;
  elementId: string;
  handleFavorite: ({
    movie_id,
    url_path,
  }: {
    movie_id: number;
    url_path: string;
  }) => void;
};

const MovieItem = ({ movie, elementId, handleFavorite }: movie) => {
  const [imageUrl, setImageUrl] = useState<string>();
  useEffect(() => {
    (async () => {
      try {
        const response = await movieDbActions.serachMovie(movie.title);
        setImageUrl(response?.data?.results[0]?.poster_path || "");
      } catch (e) {
        setImageUrl(null);
        console.log(e);
      }
    })();
  }, [movie]);

  return (
    <Card id={elementId}>
      {imageUrl ? (
        <StyledImage
          width={300}
          height={300}
          src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
        />
      ) : (
        <StyledImage width={300} height={300} src="/no-image.jpeg" />
      )}
      <Overlay>
        <div
          onClick={() =>
            handleFavorite({ movie_id: movie.id, url_path: imageUrl })
          }
          style={{ padding: "15px" }}
        >
          <FavoriteIcon />
        </div>
      </Overlay>
      <Description>
        <Title>{movie.title}</Title>
        <span>{movie.year}</span>
      </Description>
    </Card>
  );
};
export default MovieItem;
