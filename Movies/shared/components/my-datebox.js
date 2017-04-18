import { inject, bindable, bindingMode } from 'aurelia-framework';
import $ from 'bootstrap';
import { datepicker } from "bootstrap-datepicker";
import { CustomFunctions } from "../custom-functions"

@bindable('objId')
@bindable('name')
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: undefined })
@bindable({ name: 'format', defaultBindingMode: bindingMode.twoWay, defaultValue: 'MM/DD/YYYY' })

@inject(Element, CustomFunctions)
export class MyDatebox {

    constructor(element, customFnc) {
        this.element = element;
        this.customFnc = customFnc;
    }

    attached() {  
        let input = $('#dateboxInput' + this.objId);
        let self = this;
        this.isValidDate = this.customFnc.isValidDate(this.value,this.format);

        input.datepicker({
            format : self.format
        })
            .on('changeDate', function (ev) {
                let value = input.val();
                self.isValidDate = self.customFnc.isValidDate(value, self.format);
                console.log("self.isValidDate", self.isValidDate);
                if (self.isValidDate) {
                    self.value = self.customFnc.convertToDate(value,self.format.toUpperCase());
                    input.datepicker('hide');
                }
                //self.isValidDate = value.isValid();
                //if (self.isValidDate) {
                //    
                //    input.datepicker('hide');
                //} 
        }); 
    }

    valueChanged(newValue) {
        if (!newValue)
            this.isValidDate = false;
    }

    openCalendar() {
        let input = $('#dateboxInput' + this.objId);
        input.datepicker('show');
    }
}