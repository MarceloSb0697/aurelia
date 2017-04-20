import { MoviesService } from '../../src/movies/movies-service';
import { inject } from "aurelia-framework";

@inject(MoviesService)
export class MoviesList {

    constructor(moviesService) {
        this.movieService = moviesService;
        this.movies = this.movieService.getMovies();
        //this.movieService.getMovies()
        //    .then(response => {
        //        this.movies = response;
        //    });
    }

}