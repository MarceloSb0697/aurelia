export class AboutRadiobutton {
    constructor() {
        this.title = "About Radiobutton";
        this.defaultValue = true;
        this.primaryValue = false;
        this.sucessValue = true;
        this.infoValue = false;
        this.warningValue = true;
        this.errorValue = false;
    }

    activate() { 
        this.codeHtml = '&lt;my-radiobutton ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'value.bind="defaultValue"' +
            '&gt;<br/>' +
            '&lt;/my-radiobutton&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = true;<br/>}';
    }
}