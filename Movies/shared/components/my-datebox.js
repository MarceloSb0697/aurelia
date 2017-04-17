import { inject, bindable, bindingMode } from 'aurelia-framework';
import $ from 'bootstrap';
import { datepicker } from "bootstrap-datepicker";

@bindable('objId')
@bindable('name')
@bindable({ name: 'placeholder', defaultValue: 'MM/DD/YYYY' })
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: undefined })

@inject(Element)
export class MyDatebox {

    constructor(element) {
        this.element = element;
    }

    attached() {  
        let input = $('#dateboxInput' + this.objId);
        let self = this;
        input.datepicker()
            .on('changeDate', function (ev) {
                self.value = input.val();
            }); 
    }
}