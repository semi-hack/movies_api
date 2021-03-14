const express = require('express');
const path = require('path');
//const { title } = require('process');
const movieController = require('../controller/movie_controller');
const router = express.Router();
const db = path.join(__dirname, '../config.json')
let movies = require('../config.json')
//const movieService = new movieController(db);

router.post('/add', movieController.addMovies),
router.get('/list', movieController.getMovieList),
router.get('/spec', movieController.getMovieByArg),
router.patch('/update', movieController.updateMovie),
router.delete('/delete', movieController.deleteMovie),


// router.post('/new', async (req, res) => {
//     try {
//         const { Title, Year, Genre, Type, Runtime, Actors, Language, Country } = req.body
//         console.log(req.body)
//         const movielist = await movieService.getData()
//         if(req.body.Title === movielist.Title) {
//             console.log("exist in db")
//             return { success: false };
//         }
//         await movieService.addMovie(Title, Year, Genre, Type, Runtime, Actors, Language, Country);
//         console.log('doing')
//         return res.status(200).json({
//             message: movielist
//         })
//     } catch(err) {
//         return res.status(500).json({
//             error: "error"
//         });
//     }
    
// })

// router.get('/movies', async (req, res) => {
//     try {
//         console.log('trying')
//         const movielist = await movieService.getData();
//         console.log(movielist)
//         res.status(200).json({
//             message: movielist
//         })
//     } catch (err) {
//         return res.status(500)
//     }
// })

// router.get('/gett', async (req, res) => {
//     const movielist = await movieService.getMovies(req.body)
//     res.status(200).json({
//         message: movielist
//     })
// })

// router.patch('/update', async (req, res) => {
//     const { Title } = req.body
//     const updated = await movieService.updateMovie(Title, req.body)
//     res.status(200).json({
//         message: updated
//     })
// })

// router.delete('/mov', async (req, res) => {
//     try {
//         await movieService.deleteMovie(req.body.Title);
//         const mv = await movieService.getData();
//         res.sendStatus(200)
//     } catch (err) {
//         return res.status(500)
//     }
// })

module.exports = router