import { MoviesService } from '../../src/movies/movies-service';
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
 
@inject(MoviesService, Router) 
export class MoviesEdit  { 

    constructor(movieService, router) { 
        this.title = "Edit Movie";
        this.movie;
        this.movieService = movieService;
        this.router = router; 
    }

    activate(params) {
        let movie = this.movieService.getMovieById(params.id);
        this.movie = JSON.parse(JSON.stringify(movie)); 
    }


    updateMovie() {
        console.log("udppdate", this.movie);
        let self = this;
         this.movieService.updateMovie(this.movie);
            let url = this.router
                .generate("details",
                { id: this.movie.id });
            this.router.navigate(url);
       
         
    }

    cancelEdit() {
        let url = this.router.generate("home", {});
        this.router.navigate(url);
    }
} 