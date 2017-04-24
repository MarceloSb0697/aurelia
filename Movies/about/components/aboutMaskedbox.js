export class AboutMaskedbox {
    constructor() {
        this.title = "About MaskedBox";
        this.codeHtml = "codeHtml";
        //this.codeHtml = '&lt;my-checkbox ' +
        //    'obj-id="demo" ' +
        //    'name="Demo-Label" ' +
        //    'value.bind="defaultValue"' +
        //    '&gt;<br/>' +
        //    '&lt;/my-checkbox&gt;';
        this.codeJs = "codeJs";
        //this.codeJs = 'constructor() { <br/>' +
        //    ' this.defaultValue = true;<br/>}';
         
        this.defaultObject = {
            value: '',
            mask: '000-00-0000'
        };

        this.requiredObject = {
            value: '',
            mask: '(000) 000-0000',
            pattern: new RegExp(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/)
        };
    }
}