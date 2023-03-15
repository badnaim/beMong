import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import db from "./config/mongoos-config.js";
import movieRouter from "./routes/movies-api.js";
// import "./config/mongoos-config";

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3456;
app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
