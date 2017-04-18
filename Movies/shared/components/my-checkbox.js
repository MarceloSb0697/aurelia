import { bindable, inject, bindingMode } from 'aurelia-framework';

@bindable('objId')
@bindable('name')
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: false })
@bindable({ name: 'class', default: '' })
    
@inject(Element)
export class MyCheckbox {

    constructor(element) {
        this.element = element;
    }

}