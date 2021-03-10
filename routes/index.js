const express = require('express');
const path = require('path');
const movieController = require('../controller/movie_controller');
const router = express.Router();
const db = path.join(__dirname, '../config.json')
const movieService = new movieController(db);


router.post('/new', async (req, res) => {
    try {
        const { Title, Year, Genre, Type, Runtime, Actors, Language, Country } = req.body
        console.log(req.body)
        const movielist = await movieService.getData()
        if(req.body.Title === movielist.Title) {
            console.log("exist in db")
            return { success: false };
        }
        await movieService.addMovie(Title, Year, Genre, Type, Runtime, Actors, Language, Country);
        console.log('doing')
        return res.status(200).json({
            message: movielist
        })
    } catch(err) {
        return res.sendStatus(500).json({
            error: "error"
        });
    }
    
})

router.get('/movies', async (req, res) => {
    try {
        console.log('trying')
        const movielist = await movieService.getData();
        console.log(movielist)
        res.sendStatus(200).json({
            message: movielist
        })
    } catch (err) {
        return res.status(500)
    }
})

module.exports = router