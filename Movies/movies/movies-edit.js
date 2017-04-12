import { MoviesService } from 'movies/movies-service';
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";

import { BaseValidation } from '../shared/base-validation';
import { ValidationRules } from 'aurelia-validation';
import { ValidationControllerFactory } from 'aurelia-validation';

@inject(MoviesService, Router, ValidationControllerFactory)
export class MoviesEdit extends BaseValidation {

    constructor(movieService, router, controllerFactory) {
        super(controllerFactory.createForCurrentScope());
        this.title = "Edit Movie";
        this.movie;
        this.movieService = movieService;
        this.router = router;
        this.controller = controllerFactory.createForCurrentScope();
        
    }

    activate(params) {
        let movie = this.movieService.getMovieById(params.id);
        this.movie = JSON.parse(JSON.stringify(movie));
        //ValidationRules
        //    .ensure(a => a.title)
        //    .required()
        //    .on(this.movie);
    }


    updateMovie() {
        console.log("udppdate", this.movie);
        let self = this;
        let validation = this.controller.validate()
            .then(() => {
                this.controller.reset();
            });
        console.log("validation", validation);
       // this.validation.validate().then(() => {
            //this.movieService.updateMovie(this.movie);
            //let url = this.router
            //    .generate("details",
            //    { id: this.movie.id });
            //this.router.navigate(url);
       // });

        //.then((response) => {
        //    alert("Updated");
        //    let url = this.router
        //        .generate("details",
        //        { id: this.movie.id });
        //    this.router.navigate(url);
        //});
    }
}
//ValidationRules
//    .ensure(a => a.title).required()
//    .ensure(a => a.releaseYear).required()
//    .on(MoviesEdit.movie);
