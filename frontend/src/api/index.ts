import axios from "axios";

const publicFetch = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const movieDBFetch = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { publicFetch, movieDBFetch };
