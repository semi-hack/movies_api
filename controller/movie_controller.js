const fs = require('fs');
const util = require('util');
const Movie = require('../models/movie');


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const addMovies = async (req, res) => {
    const {Title, Year, Genre, Type, Runtime, Actors, Language, Country} = req.body

    try {
        const existingmovie = await Movie.findOne({ Title: req.body.Title })
        if (existingmovie) {
            return res.status(401).json({
                message: "already exists"
            })
        }

        const movie = new Movie({
            Title,
            Year,
            Genre,
            Type,
            Runtime,
            Actors,
            Language,
            Country
        })

        const data = await movie.save()

        return res.json({
            success: true,
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
        });
    }
}

const getMovieList = async (req, res) => {
    try {
        const data = await Movie.find({})

        return res.status(200).json({
            data: data
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
}

const getMovieByArg = async (req, res) => {
    try {
        let [condition] = Object.keys(req.body)

        if(condition === 'Genre') {
            const result = await Movie.find({ Genre: req.body.Genre})
            return  res.status(200).json({
                data: result
            })
        } else  if(condition === 'Type') {
            const result = await Movie.find({ Type: req.body.Type})
            return  res.status(200).json({
                data: result
            })
        } else if(condition === 'Year') {
            const result = await Movie.find({ Year: req.body.Year})
            return  res.status(200).json({
                data: result
            })
        } else if(condition === 'Title') {
            const result = await Movie.find({ Title: req.body.Title})
            return  res.status(200).json({
                data: result
            })
        }
        // switch (condition) {
        //                 case "Genre" :
        //                     console.log(genre)
        //                     if(condition === 'Genre') {
        //                         const result = await Movie.find({ Genre: req.body.Genre})
        //                         return  res.status(200).json({
        //                             data: result
        //                         })
        //                     }
        //                 case "Type" :
        //                     console.log(type)
        //                     if(condition === 'Type') {
        //                         const result = await Movie.find({ Type: req.body.Type})
        //                         return  res.status(200).json({
        //                             data: result
        //                         })
        //                     }
        //                 case "Year" :
        //                     if(condition === 'Year') {
        //                         const result = await Movie.find({ Year: req.body.Year})
        //                         return  res.status(200).json({
        //                             data: result
        //                         })
        //                     }
        //                 case "Title" :
        //                     if(condition === 'Title') {
        //                         const result = await Movie.find({ Title: req.body.Title})
        //                         return  res.status(200).json({
        //                             data: result
        //                         })
        //                     }
        //                 default :
            
        //                 return res.status(203)
        // }

    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
}

const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(req.body.Title, {$set: req.body}, { new: true })
        res.json({
                success: true,
                data: updatedMovie,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
}

const deleteMovie = async (req, res) => {
  try {
      const movie = await Movie.findOneAndDelete({ Title: req.body.Title});
      if(!movie) {
          res.status(404).json({
              success: false,
              data: "not found, couldn't delete"
          })
      }
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

// class movieController {
//     constructor (datafile) {
//         this.datafile = datafile;
//     }

//     // add movies
//     async addMovie(c) {
//         const data = await this.getData();
//         data.unshift({ Title, Year, Genre, Type, Runtime, Actors, Language, Country });
//         return writeFile(this.datafile, JSON.stringify(data));
//     }

//     // update movie
//     async updateMovie(arg1, arg2) {
//         const data = await this.getData();
//         const result = data.find(res => res.Title == arg1)
//         console.log(result)
//         writeFile(this.datafile, JSON.stringify(result), 'utf8')
//         data.unshift(arg2)
//         return writeFile(this.datafile, JSON.stringify(data))


//     }

//     // delete movie
//     async deleteMovie(args) {
//         const data = await this.getData()
//         console.log(data)
//         const result = data.filter(res => res.id == args)
//         console.log(result)

//         return writeFile(this.datafile, JSON.stringify(result), 'utf8')
        
        
//     }

//     // get movie list
//     async getData() {
//         const data = await readFile(this.datafile, 'utf8');
//         if (!data) return [];
//         return JSON.parse(data);
//     }

//     // get movies by year, genre, type, title
//     async getMovies(args) {
//         const data = await this.getData()
//         let [condition] = Object.keys(args)
//         const vals = Object.values(args)
//         switch (condition) {
//             case "Genre" :
//                 if(condition === 'Genre') {
//                     const result = data.filter( res => res.Genre == vals)
//                     return result
//                 }
//             case "Type" :
//                 if(condition === 'Type') {
//                     const result = data.filter(res => res.Type == vals )
//                     return result
//                 }
//             case "Year" :
//                 if(condition === 'Year') {
//                     const result = data.filter(res => res.Year == vals )
//                     return result
//                 }
//             case "Title" :
//                 if(condition === 'Title') {
//                     const result = data.filter(res => res.Title == vals )
//                     return result
//                 }
//             default :

//             return
//         }
//     }
// }

module.exports = { addMovies, getMovieList, updateMovie, getMovieByArg, deleteMovie }