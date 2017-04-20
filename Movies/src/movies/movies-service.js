import { HttpClient } from "aurelia-http-client";
import { inject } from "aurelia-framework";


@inject(HttpClient)
export class MoviesService {

    constructor(httpClient) {
        this.movies = [];
        this.currentId = 0;
        this.http = httpClient;
    }

    activate() {
        this.http.get("/src/movies/movies.json")
            .then(response => {
                this.movies = JSON.parse(response.response);
                this.currentId = this.movies.length;
            });
    }

    getMovies() {
        return this.movies;
        //return this.http.get("/movies/movies.json")
        //    .then(response => {
        //        return JSON.parse(response.response);
        //    });
    }

    getMovieById(id) {
        return this.movies.find(x => x.id == id);
        //return this.http.get("/movies/movies.json")
        //    .then(response => {
        //        let list = JSON.parse(response.response);
        //        return list.find(x => x.id == id);
        //    }); 
    }

    updateMovie(movie) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].id == movie.id) {
                this.movies[i] = movie;
                break;
            }
        }
        return movie;
    }

    createMovie(movie) {
        this.currentId++;
        movie.id = this.currentId;
        this.movies.push(movie);
    }

    deleteMovie(movie) {
        this.movies = this.movies.filter(x => x.id != movie.id);
    }
    
}