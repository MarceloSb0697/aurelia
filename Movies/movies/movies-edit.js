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
        let movie = this.movieService.getMovieById(params.id);
        this.movie = JSON.parse(JSON.stringify(movie));
    }


    updateMovie() {
        this.movieService.updateMovie(this.movie);
        let url = this.router
                      .generate("details",
                      { id: this.movie.id });
        this.router.navigate(url);
            //.then((response) => {
            //    alert("Updated");
            //    let url = this.router
            //        .generate("details",
            //        { id: this.movie.id });
            //    this.router.navigate(url);
            //});
    }
}