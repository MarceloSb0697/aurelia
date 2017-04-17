import { bindable, inject, bindingMode } from 'aurelia-framework';

@bindable('objId')
@bindable('name')
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: false })


@inject(Element)
export class MyCheckbox {

    constructor(element) {
        this.element = element;
    }

}