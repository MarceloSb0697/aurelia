import { inject, bindable, bindingMode } from 'aurelia-framework';
import $ from 'bootstrap';
import { datepicker } from "bootstrap-datepicker";
import { CustomFunctions } from "../custom-functions"

@bindable('objId')
@bindable('name')
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: undefined })
@bindable({ name: 'format', defaultBindingMode: bindingMode.twoWay, defaultValue: 'MM/DD/YYYY' })
@bindable({ name: 'isRequired', defaultBindingMode: bindingMode.twoWay, defaultValue: false })
@inject(Element, CustomFunctions)
export class MyDatebox {

    constructor(element, customFnc) {
        this.element = element;
        this.customFnc = customFnc;
    }

    attached() {
        let input = $('#dateboxInput' + this.objId);
        let self = this;
        this.isValidDate = this.customFnc.isValidDate(this.value, this.format);
        console.log("format", this.format);
        input.datepicker({
            autoclose: true,
            format: self.format
        })
            .on('changeDate', function (ev) {
                let value = input.val();
                self.isValidDate = self.customFnc.isValidDate(value, self.format);
                console.log("isValidDate", self.isValidDate);
                if (self.isValidDate) { 
                    self.value = value;
                }
            })
            .on('hide', function (ev) {
                if (!self.isValidDate) {
                    //add validation handler
                    input.val('');
                }
            })
            ;
    }

    valueChanged(newValue) {
        if (!newValue) {
            if (this.isRequired)
                this.isValidDate = false;
            else
                this.isValidDate = true;
        }
        else {
            console.log("valueChanged");
            let input = $('#dateboxInput' + this.objId);
            this.isValidDate = this.customFnc.isValidDate(newValue, this.format);
            if (!this.isValidDate) {
                input.val('');
                //add validation handler 
            }
        }
    }

    openCalendar() {
        let input = $('#dateboxInput' + this.objId);
        input.datepicker('show');
    }
}