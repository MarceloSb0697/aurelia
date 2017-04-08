import { MoviesService } from 'movies/movies-service';
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";


@inject(MoviesService, Router)
export class MoviesEdit {
    constructor(movieService,router) {
        this.title = "Edit Movie";
        this.movieService = movieService;
        this.router = router;
    }

    activate(params) {
        return this.movieService.getMovieById(params.id)
            .then(response => {
                this.movie = response;
            });
    }


    updateMovie() {
        //this.movieService.updateMovie(this.movie)
        //    .then((response) => {
        //        let url = this.router
        //            .generate("details",
        //            { id: this.movie.id });
        //        this.router.navigate(url);
        //    })
        alert("Updated");
    }
}