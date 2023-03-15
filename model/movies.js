import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: Number,
    title: String,
    fullplot: String,
    countries: [String],
    released: Date,
    director: [String],
    awards: Object,
    lastUpdated: Date,
    year: Number,
    imdb: Object,
    type: String,
    tomatoes: Object,
  },
  {
    collection: "movies",
  }
);

const Movie = mongoose.model("movie", movieSchema);

export default Movie;
