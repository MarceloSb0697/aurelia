import { inject, customElement, bindable, bindingMode } from 'aurelia-framework';

 
@bindable({ name: 'options', defaultBindingMode: bindingMode.twoWay, defaultValue: [] })
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay })
@bindable({ name: 'name', defaultValue: '' })
@bindable({ name: 'objId', defaultValue: null })

@inject(Element)
export class MyDropdown {

    constructor(element) {
        this.element = element;
    }

    attached() {
        
    }

    onChange(changedValue) {
         //changeEvent
    }
}