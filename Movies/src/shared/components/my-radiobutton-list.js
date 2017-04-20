import { bindable, bindingMode } from 'aurelia-framework';

@bindable('id')
@bindable('list')
@bindable('label')
@bindable('radioname')
@bindable({ name: 'selected', defaultBindingMode: bindingMode.twoWay })
@bindable({ name: 'radioClass', default: '' })
export class MyRadiobuttonList {
    constructor() {
        //this.id = "demo";
        this.list = [
            { id: 1, text: "desc 1" },
            { id: 2, text: "desc 2" },
            { id: 3, text: "desc 3" },
            { id: 4, text: "desc 4" },
            { id: 5, text: "desc 5" },
        ];

        this.selected = this.list[3];
    }
}