export class AboutTextarea {
    constructor() {
        this.title = "About Textarea";
        this.defaultValue = "Roy Rojas";
    }

    activate() {
        this.codeHtml = '&lt;my-textarea ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'value.bind="defaultValue" ' +
            'placeholder="Demo"' +
            '&gt;<br/>' +
            '&lt;/my-textarea&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = "Roy Rojas";<br/>}';

    }
}