type MovieType = {
  id: number;
  title: string;
  url_path?: string;
  year: number;
};

type FavoriteType = {
  detail: MovieType;
  ratings: Ratings;
  people: {
    stars: People;
    director: People;
  };
};

type Ratings = Array<{
  rating: number;
  votes: number;
}>;

type People = Array<{ name: string }>;

export type { FavoriteType, MovieType };
