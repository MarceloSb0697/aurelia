import { inject, bindable, bindingMode } from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-mask-plugin';

@bindable('name')
@bindable('objId')
@bindable('mask')
@bindable('pattern')
@bindable({ name: 'value', defaultBindingMode: bindingMode.twoWay, defaultValue: '' })
@bindable({ name: 'validate', defaultValue: false })
export class MyMaskedbox {
    constructor() { 
        this.errorMessage = "Invalid format"; //could be bindable
        this.isValid = true;  
        if (this.validate)
            this.validateFormat(); 
    }

    keyup() {
        let input = $("#maskedBoxInput" + this.objId); 
        input.mask(this.mask); 
        //set the format to the input
        this.value = input.val().trim();
        if (this.value && this.mask && this.value.length > this.mask.length) {
            this.value = this.value.substring(0, this.mask.length);
        }
        //validate if it's needed
        if (this.validate)
            this.validateFormat();  
        //set the focus at the end
        input[0].setSelectionRange(this.value.length, this.value.length);
        return true;
    } 


    validateFormat() { 
        if (this.value && this.value.length > 0) {
            this.isValid = this.pattern.test(this.value);
        } else {
            this.isValid = true;
        }
    }
}