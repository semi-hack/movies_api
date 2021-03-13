const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class movieController {
    constructor (datafile) {
        this.datafile = datafile;
    }

    // add movies
    async addMovie(Title, Year, Genre, Type, Runtime, Actors, Language, Country) {
        const data = await this.getData();
        data.unshift({ Title, Year, Genre, Type, Runtime, Actors, Language, Country });
        return writeFile(this.datafile, JSON.stringify(data));
    }

    // update movie
    // async updateMovie(Title, Year, Genre, Type, Runtime, Actors, Language, Country) {
    //     const data = await this.getData();
    //     data.filter((data) => {
    //         return data.Title = Title
    //     })

    // }

    // delete movie
    async deleteMovie(args) {
        const data = await this.getData()
        console.log(data)
        const result = data.filter(res => res.id == args)
        console.log(result)

        return writeFile(this.datafile, JSON.stringify(result), 'utf8')
        
        
    }

    // get movie list
    async getData() {
        const data = await readFile(this.datafile, 'utf8');
        if (!data) return [];
        return JSON.parse(data);
    }

    // get movies by year, genre, type, title
    async getMovies(args) {
        const data = await this.getData()
        let [condition] = Object.keys(args)
        const vals = Object.values(args)
        switch (condition) {
            case "Genre" :
                if(condition === 'Genre') {
                    const result = data.filter( res => res.Genre == vals)
                    return result
                }
            case "Type" :
                if(condition === 'Type') {
                    const result = data.filter(res => res.Type == vals )
                    return result
                }
            case "Year" :
                if(condition === 'Year') {
                    const result = data.filter(res => res.Year == vals )
                    return result
                }
            case "Title" :
                if(condition === 'Title') {
                    const result = data.filter(res => res.Title == vals )
                    return result
                }
            default :

            return
        }
    }
}

module.exports = movieController