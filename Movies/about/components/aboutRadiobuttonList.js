export class AboutRadiobuttonList {
    constructor() {
        this.title = "About Radiobutton List";
        this.codeJs = "JS";
        this.codeHtml = "codeHtml";
    }

    activate() {
        this.codeHtml = '&lt;my-radiobutton-list ' +
            'obj-id="demo" ' +
            'list.bind="radioButtonList" ' +
            'selected.bind="selectedOption" ' +
            'name="Demo-RadiobuttonList" ' +
            'class="radio-primary" ' +
            'alignment="horizontal" ' +
            '&gt;<br/>' +
            '&lt;/my-radiobutton-list&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.radioButtonList = [' + '<br/>' +
            ' \t{ id: "1", text: "Desc 1" },' + '<br/>' +
            ' \t{ id: "2", text: "Desc 2" },' + '<br/>' +
            ' \t{ id: "3", text: "Desc 3" },' + '<br/>' +
            ' \t...' + '<br/>' +
            ' \t{ id: "n", text: "Desc n" },' + '<br/>' +
            ' ] ;' + '<br/>' +
            ' this.selectedOption = this.radioButtonList[1];<br/>}';

        this.radioButtonList = [
            { id: 1, text: "Desc 1" },
            { id: 2, text: "Desc 2" },
            { id: 3, text: "Desc 3" },
            { id: 4, text: "Desc 4" },
            { id: 5, text: "Desc 5" }
        ]
        this.selectedOption = this.radioButtonList[3];
        this.selectedPrimaryOption = this.radioButtonList[2];
        this.selectedHorizontalInfoOption = this.radioButtonList[1];
        this.selectedHorizontalWarningOption = this.radioButtonList[4];
    }
}