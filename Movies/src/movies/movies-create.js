import { MoviesService } from '../../src/movies/movies-service';
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";

@inject(MoviesService, Router)
export class MoviesCreate {
    constructor(movieService, router) {
        this.title = "Create Movie";
        this.movieService = movieService;
        this.router = router;
        this.movie = {
            releaseYear: "",
            title: ""
        };
    }

    createMovie() {
        this.movieService.createMovie(this.movie);
        let url = this.router.generate("home");
        this.router.navigate(url);
    }
}