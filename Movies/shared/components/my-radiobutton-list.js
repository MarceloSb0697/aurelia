import { bindable, bindingMode } from 'aurelia-framework';

@bindable('id')
@bindable('radiobuttons')
@bindable('label')
@bindable('radioname')
@bindable({ name: 'selected', defaultBindingMode: bindingMode.twoWay })
@bindable({ name: 'radioClass', default: '' })
export class MyRadiobuttonList {
    constructor() {
        //this.id = "demo";
        //this.radiobuttons = [
        //    { id: 1, name: "desc 1" },
        //    { id: 2, name: "desc 2" },
        //    { id: 3, name: "desc 3" },
        //    { id: 4, name: "desc 4" },
        //    { id: 5, name: "desc 5" },
        //];

        //this.selected = this.radiobuttons[1];
        //this.radioname = "demoName";
        //this.label = "LABEL";
    }
}