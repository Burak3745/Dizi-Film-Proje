import express from "express";
import mongoose from "mongoose";

import Movie from "../models/movieModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const movie = await Movie.find()

        res.status(200).json(movie)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({ message: 'Movie id is not valid' })

        const movie = await Movie.findById(id)
        if (!movie) return

        res.status(200).json(movie)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Movie not found' })
    }
})

router.post("/", async (req, res) => {
    try {
        const movie = req.body
        const createdMovie = await Movie.create(movie)
        res.status(201).json(createdMovie)
    } catch (error) {
        console.log(error);
        res.json({ message: 'Create movie failed' })
    }


})

router.put('/:id', async (req, res) => {
    try {

        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({ message: 'Movie is not valid' })
        const { name, time, link, country, year, score, description, director, company, actors, catagory, image } = req.body

        const updatedMovie = await Movie.findByIdAndUpdate(id,
            { name, time, link, country, year, score, description, director, company, actors, catagory, image, _id: id },
            { new: true })
        res.status(200).json(updatedMovie)

    } catch (error) {
        console.log(error.message)
        res.json({ message: 'Update failed' })
    }

})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({ message: 'Movie is not valid' })

        await Movie.findByIdAndDelete(id)
        res.status(200).json({ message: 'Movie has been deleted' })
    } catch (error) {
        console.log(error.message)
        res.json({ message: 'Movie deleted failed' })
    }

})

export default router;