import { inject, transient } from 'aurelia-framework';
import { Container } from 'aurelia-dependency-injection';
import { validateTrigger } from 'aurelia-validation';
import { FormValidationRenderer } from '../shared/form-validation-renderer';

@transient()
export class BaseValidation {
    constructor(controller) {
        this.controller = controller;
        this.controller.addRenderer(new FormValidationRenderer());
        this.controller.validateTrigger = validateTrigger.change;
    }
}