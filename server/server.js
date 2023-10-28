import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import compression from 'compression';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import userRouter from "./Routers/userRouter.js";
import movieRouter from "./Routers/movieRouter.js"
dotenv.config();

const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.json({ limit: '100mb'}));
app.use(express.json());
app.use(compression());
app.use('/images', express.static(join(_dirname, 'dataset', 'cards'), { maxAge:31557600 }));
app.use("/users", userRouter);
app.use("/movie", movieRouter);

app.get('/api/genres', (req, res) => {
    const getFile = readFileSync(join(_dirname, 'dataset', 'genres.json'), 'utf8');
    res.json(JSON.parse(getFile));
});

app.get('/api/list/:id', async (req, res) => {
    let genreId = req.params.id;
    const getFile = readFileSync(join(_dirname, 'dataset', 'genreDataSet.json'),'utf8');
    res.json(JSON.parse(getFile)[16]);
});

app.get('/api/video/:id', (req, res) => {
    let obj = {
        videoUri: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
        rating: 'Rated U',
        ratingDetails: 'Suitable for all',
    };
    res.json(obj);
});

app.get('/api/details/:id', (req, res) => {
    
})

app.listen(5000, () => {
    // connect to database
    mongoose
      .connect(process.env.DB_CONNECTION_STRING)
      .then(() => console.log("connected to db"))
      .catch((error) => console.log(error));
  });
  