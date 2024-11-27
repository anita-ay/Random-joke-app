import { default as express } from "express";
import { jokes } from "./jokes.js";

const jokeApp = express();

jokeApp.get("/joke", (req, res) => {
  const randomJoke = Math.floor(Math.random() * jokes.length);
  return res.json(jokes[randomJoke]);
});

const port = 3000;
jokeApp.listen(port, () => {
  console.log(`Server at ${port}`);
});
