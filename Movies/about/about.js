import { inject } from 'aurelia-framework';


export class About {
    constructor() {
        console.log("About");
    }

    configureRouter(config, router) {
 

        this.router = router;
        let routes = [
            { route: "", moduleId: "about/components/aboutCheckbox",  nav: true, name : "checkbox" }
        ];
        config.map(routes);
    }
}