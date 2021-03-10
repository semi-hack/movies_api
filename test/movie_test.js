
const { it } = require('mocha');
const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('supertest');

describe("Testing features of the movies api", () => {
    const sampleMovie = {
        Title: "x",
        Year: "y",
        Genre: "z",
        Type: "l",
        Runtime: "c", 
        Actors: "m",
        Language: "o" ,
        Country: "p",
    }

    const moviesArray = []

    it("should add a movie to the moviesArray", (done) => {
        var result = moviesArray.push(sampleMovie)

        expect(result).
    })
})