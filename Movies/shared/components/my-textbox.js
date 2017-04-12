import { inject, bindable, bindingMode } from 'aurelia-framework';

@bindable('label')
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: '' })
@bindable({ name: 'placeholder', defaultValue: '', defaultBindingMode: bindingMode.twoWay })
@bindable({ name: 'objId', defaultValue: '' })
@bindable({ name: 'class', defaultValue: '' })

@inject(Element)
export class MyTextbox {

    constructor(element) {
        this.element = element;
        console.log("this.value", this.value);
        console.log("this.placeholder", this.placeholder);
    }

    activate() {
        console.log("activate");
    }

}