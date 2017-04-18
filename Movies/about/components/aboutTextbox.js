export class AboutTextbox {
    constructor() {
        this.title = "About Textbox"; 
        this.defaultValue = "Roy Rojas";
    }

    activate() {
        this.codeHtml = '&lt;my-textbox ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'value.bind="defaultValue" ' +
            'placeholder="Demo"' +
            '&gt;<br/>' +
            '&lt;/my-textbox&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = "Roy Rojas";<br/>}';

    }
}