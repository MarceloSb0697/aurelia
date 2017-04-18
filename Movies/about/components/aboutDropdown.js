export class AboutDropdown {
    constructor() {
        this.title = "About Dropdown";
    }

    activate() {
        this.codeHtml = "HTML";
        this.codeJs = "JS";
        //this.codeHtml = '&lt;my-checkbox ' +
        //    'obj-id="demo" ' +
        //    'name="Demo-Label" ' +
        //    'value.bind="defaultValue"' +
        //    '&gt;<br/>' +
        //    '&lt;/my-checkbox&gt;';
        //this.codeJs = 'constructor() { <br/>' +
        //    ' this.defaultValue = true;<br/>}';

        this.dropdownOptions = [
            { id: "1", text: "Desc 1" },
            { id: "2", text: "Desc 2" },
            { id: "3", text: "Desc 3" },
            { id: "4", text: "Desc 4" },
            { id: "5", text: "Desc 5" },
            { id: "6", text: "Desc 6" }
        ];

        this.dropdownValue = this.dropdownOptions[1];
    }
}