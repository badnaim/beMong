import mongoose from "mongoose";

const MONGO_CONNECTION_STRING =
  "mongodb+srv://batnyam17:batnyam17@cluster0.gfvhelw.mongodb.net/sample_mflix";

const db = mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then((res) => {
    console.log("connected");
  })
  .catch(() => {
    console.error(err);
  });

export default db;
