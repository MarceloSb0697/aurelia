import { MoviesService } from 'movies/movies-service';
import { inject } from "aurelia-framework"; 


@inject(MoviesService)
export class MoviesDetails {
    constructor(movieService) {
        this.movieService = movieService;
    }
    activate(params) {
       return this.movieService.getMovieById(params.id)
            .then(response => {
                this.movie = response;
            });
    }
}