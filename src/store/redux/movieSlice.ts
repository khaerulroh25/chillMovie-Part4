import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Movie = {
  id: string;
  title?: string;
  poster: string;
  watched: boolean;
};

interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },

    addMovie(state, action: PayloadAction<Movie>) {
      state.movies.push(action.payload);
    },

    updateMovie(state, action: PayloadAction<Movie>) {
      const index = state.movies.findIndex((m) => m.id === action.payload.id);
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },

    deleteMovie(state, action: PayloadAction<string>) {
      state.movies = state.movies.filter((m) => m.id !== action.payload);
    },
  },
});

export const { setMovies, addMovie, updateMovie, deleteMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
