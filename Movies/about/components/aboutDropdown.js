export class AboutDropdown {
    constructor() {
        this.title = "About Dropdown";
    }

    activate() {
        this.codeJs = "JS";
        this.codeHtml = '&lt;my-dropdown ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'selected.bind="selected" ' +
            'options.bind="dropdownOptions" ' +
            '&gt;<br/>' +
            '&lt;/my-dropdown&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.dropdownOptions = [' + '<br/>' +
            ' \t{ id: "1", text: "Desc 1" },' + '<br/>' +
            ' \t{ id: "2", text: "Desc 2" },' + '<br/>' +
            ' \t{ id: "3", text: "Desc 3" },' + '<br/>' +
            ' \t...' + '<br/>' +
            ' \t{ id: "n", text: "Desc n" },' + '<br/>' +
            ' ] ;' + '<br/>' +
            ' this.selected = this.dropdownOptions[1];<br/>}';

        this.dropdownOptions = [
            { id: "1", text: "Desc 1" },
            { id: "2", text: "Desc 2" },
            { id: "3", text: "Desc 3" },
            { id: "4", text: "Desc 4" },
            { id: "5", text: "Desc 5" },
            { id: "6", text: "Desc 6" }
        ];

        this.selected = this.dropdownOptions[1];
    }
}