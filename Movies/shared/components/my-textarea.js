import { inject, bindable, bindingMode } from 'aurelia-framework';

@bindable({ name: 'objId', defaultValue: '' })
@bindable('name')
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: '' })
@bindable({ name: 'placeholder', defaultValue: '', defaultBindingMode: bindingMode.twoWay })
@bindable({ name: 'class', defaultValue: '' })

@inject(Element)
export class MyTextarea {
    constructor(element) {
        this.element = element;
    }

    activate() {

    }
}