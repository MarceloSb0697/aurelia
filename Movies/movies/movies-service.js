import { HttpClient } from "aurelia-http-client";
import { inject } from "aurelia-framework";


@inject(HttpClient)
export class MoviesService {

    constructor(httpClient) {
        this.movies = [

        ];
        this.http = httpClient;
    }

    activate() {
        this.http.get("/movies/movies.json")
            .then(response => {
                this.movies = JSON.parse(response.response);
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
        return this.http.get("/movies/movies.json")
            .then(response => {
                let list = JSON.parse(response.response);
                return list.find(x => x.id == id);
            }); 
    }
    
}