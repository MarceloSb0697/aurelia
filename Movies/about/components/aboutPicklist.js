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

        this.listPrimary = [
            { id: 1, text: "Desc Primary 1", checked: true },
            { id: 2, text: "Desc Primary 2", checked: false },
            { id: 3, text: "Desc Primary 3", checked: true },
            { id: 4, text: "Desc Primary 4", checked: false }
        ];


        this.listInfo = [
            { id: 1, text: "Desc Info 1", checked: true },
            { id: 2, text: "Desc Info 2", checked: false },
            { id: 3, text: "Desc Info 3", checked: true },
            { id: 4, text: "Desc Info 4", checked: false }
        ];

        this.listDanger = [
            { id: 1, text: "Desc Danger 1", checked: true },
            { id: 2, text: "Desc Danger 2", checked: false },
            { id: 3, text: "Desc Danger 3", checked: true },
            { id: 4, text: "Desc Danger 4", checked: false }
        ];
    }
}