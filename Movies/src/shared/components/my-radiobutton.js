import { bindable, inject, bindingMode } from 'aurelia-framework';

@bindable('objId')
@bindable('name')
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: false })
@bindable({ name: 'class', default: '' })

@inject(Element)
export class MyRadiobutton {

    constructor(element) {
        this.element = element;
    }

    attached() {
        let id = '#radioInput' + this.objId;
        $(id).prop("checked", this.value);
        return true;
    }

    toogleRadio() {
        this.value = !this.value;
        let id = '#radioInput' + this.objId;
        $(id).prop("checked", this.value);
        return true;
    }
}