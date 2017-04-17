﻿export class AboutCheckbox {
    constructor() {
        this.title = "About Checkbox";
        this.defaultValue = true;
    }

    activate() {
        this.codeHtml = '&lt;my-checkbox ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'value.bind="defaultValue"' +
            '&gt;<br/>' +
            '&lt;/my-checkbox&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = true;<br/>}';
                
    }
}