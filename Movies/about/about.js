import { inject } from 'aurelia-framework';


export class About {
    constructor() {
    }

    configureRouter(config, router) {
        this.router = router;
        let routes = [
            { route: "", moduleId: "about/components/aboutCheckbox", nav: true, name: "checkbox", title: "Checkbox" },
            { route: "datebox", moduleId: "about/components/aboutDatebox", nav: true, name: "datebox", title: "Datebox" },
            { route: "dropdown", moduleId: "about/components/aboutDropdown", nav: true, name: "dropdown", title: "Dropdown" },
            { route: "textbox", moduleId: "about/components/aboutTextbox", nav: true, name: "textbox", title: "Textbox" }
        ];
        config.map(routes);
    }
}