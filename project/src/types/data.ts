export type Comments = {
  id: string;
  author: string;
  text: string;
  emoji: string;
  date: Date;
}[]

export type Data = {
  id: string;
  poster: string;
  title: string;
  origTitle: string;
  desc: string;
  shortDesc: string;
  genres: string[];
  releaseDate: Date;
  runtime: number;
  rating: number;
  ageRating: string;
  comments: Comments;
  country: string;
  director: string;
  writers: string[];
  actors: string[];
  isInWatchList: boolean;
  isWatched: boolean;
  isFavorite: boolean;
  watchedDate: Date | null;
}[]
