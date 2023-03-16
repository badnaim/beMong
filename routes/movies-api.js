import express, { Router } from "express";
import Movie from "../model/movies.js";

const movieRouter = express.Router();

movieRouter.get("/", async (request, response) => {
  console.log("get request");
  const getMovie = await Movie.find({}).limit(1);
  try {
    response.status(200).send(getMovie);
    console.log(getMovie);
  } catch (error) {
    response.status(404).send(error);
  }
});

movieRouter.post("/post", async (req, res) => {
  console.log("posted");
  res.send("test");
});

export default movieRouter;

// module js, common js
