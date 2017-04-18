

export class AboutDatebox {
    constructor() {
        this.title = "About Datebox"; 
        this.defaultValue = "05/10/2017";
        this.requiredValue = "25/10/2017";
    }

    activate() {
        this.codeHtml = 'codeHtml';
        this.codeJs = 'codeJs';
        //this.codeHtml = '&lt;my-checkbox ' +
        //    'obj-id="demo" ' +
        //    'name="Demo-Label" ' +
        //    'value.bind="defaultValue"' +
        //    '&gt;<br/>' +
        //    '&lt;/my-checkbox&gt;';
        //this.codeJs = 'constructor() { <br/>' +
        //    ' this.defaultValue = true;<br/>}';
                
    }
}