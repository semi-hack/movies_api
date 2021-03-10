const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class movieController {
    constructor (datafile) {
        this.datafile = datafile;
    }

    async addMovie(Title, Year, Genre, Type, Runtime, Actors, Language, Country) {
        const data = await this.getData();
        data.unshift({ Title, Year, Genre, Type, Runtime, Actors, Language, Country });
        return writeFile(this.datafile, JSON.stringify(data));
    }

    async updateMovie(Title, Year, Genre, Type, Runtime, Actors, Language, Country) {
        const data = await this.getData();
        data.filter((data) => {
            return data.Title = Title
        })

    }

    async deleteMovie()

    async getData() {
        const data = await readFile(this.datafile, 'utf8');
        if (!data) return [];
        return JSON.parse(data);
    }
}

module.exports = movieController