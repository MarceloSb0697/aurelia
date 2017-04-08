import { MoviesService } from 'movies/movies-service';
import { inject } from "aurelia-framework";


@inject(MoviesService)
export class App {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.moviesService.activate();
    }

    configureRouter(config, router) {
        this.router = router;

        config.map(
            [
                { route: ["", "list"], moduleId: "movies/movies-list", title: "Movies List", nav: true, name : "home" },
                { route: "about", moduleId: "about/about", title: "About", nav: true },
                { route: "details/:id", moduleId: "movies/movies-details", title: "Details Movie", name: "details" },
                { route: "edit/:id", moduleId: "movies/movies-edit", title: "Edit Movie", name: "edit" },
                { route: "create", moduleId: "movies/movies-create", title: "Create Movie", name: "create" }
            ]
        );
    }
}