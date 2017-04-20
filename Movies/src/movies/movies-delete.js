import { MoviesService } from '../../src/movies/movies-service';
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";

@inject(MoviesService, Router)
export class MoviesDelete {

    constructor(movieService, router) { 
        this.movie;
        this.movieService = movieService;
        this.router = router; 
    }

    activate(params) {
        console.log("activate-delete", params);
        let movie = this.movieService.getMovieById(params.id);
        this.movie = JSON.parse(JSON.stringify(movie)); 
    }


    deleteMovie() {
        let self = this;
        this.movieService.deleteMovie(this.movie);
        let url = this.router.generate("home");
        this.router.navigate(url); 
    }


    cancelEdit() {
        let url = this.router.generate("home", {});
        this.router.navigate(url);
    }

}