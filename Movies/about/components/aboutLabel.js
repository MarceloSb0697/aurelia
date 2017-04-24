export class AboutLabel{
    constructor() {
        this.title = "About Label"; 
    }
    activate() {
        this.labelValue = "Valor XXX de un label";

        this.codeHtml = '&lt;my-label ' +
            'obj-id="demo Label"' +
            'name="Demo" ' +
            'value.bind="labelValue" ' + 
            '&gt;<br/>' +
            '&lt;/my-label&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.labelValue = "Valor XXX de un label";<br/>}';
    }
}