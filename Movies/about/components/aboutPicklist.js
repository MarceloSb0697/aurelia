export class AboutPicklist {
    constructor() {
        this.title = "About Picklist";
        this.codeJs = "JS";
        this.codeHtml = "codeHtml";
    }
    activate() {
        this.list = [
            { id: 1, text: "Desc 1", checked: true },
            { id: 2, text: "Desc 2", checked: false },
            { id: 3, text: "Desc 3", checked: true },
            { id: 4, text: "Desc 4", checked: false }
        ];
    }
}