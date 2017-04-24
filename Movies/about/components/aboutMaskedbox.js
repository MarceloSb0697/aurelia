export class AboutMaskedbox {
    constructor() {
        this.title = "About MaskedBox"; 
        this.codeHtml = '&lt;my-maskedbox ' +
            'obj-id="demoMasked" ' +
            'name="Masked Box Validate" ' +
            'value.bind="requiredObject.value" ' +
            'mask.bind="requiredObject.mask" ' +
            'pattern.bind="requiredObject.pattern" ' +
            'validate="true" ' +
            '&gt;<br/>' +
            '&lt;/my-maskedbox&gt;';
        
        this.codeJs = 'constructor() { <br/>' +
            '   this.requiredObject = { <br/>' +
            '       value:"" , <br/>' +
            '       mask: "(000) 000- 0000" , <br/>' +
            '       pattern: new RegExp(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/) <br/>' +
            '   }<br />} ';
         
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