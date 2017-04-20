import { MoviesService } from '../../src/movies/movies-service';
import { inject } from "aurelia-framework";


@inject(MoviesService)
export class MoviesDetails {
    constructor(movieService) {
        this.movieService = movieService;
    }
    activate(params) {
        this.movie = this.movieService.getMovieById(params.id);
    }
}