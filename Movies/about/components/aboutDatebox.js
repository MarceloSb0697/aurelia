

export class AboutDatebox {
    constructor() {
        this.title = "About Datebox"; 
        this.defaultValue = "05/10/2017";
        this.requiredValue = "25/10/2017";
    }

    activate() {
        this.codeJs = 'codeJs';
        this.codeHtml = '&lt;my-datebox ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'value.bind="defaultValue" ' +
            'format="mm/dd/yyyy" ' +
            'is-required="true"' +
            '&gt;<br/>' +
            '&lt;/my-datebox&gt;';

        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = "05/10/2017";<br/>}';
                
    }
}