import { ValidationRenderer, RenderInstruction, ValidationError } from 'aurelia-validation';

export class FormValidationRenderer {
    render(instruction) {
        for (let { error, elements } of instruction.unrender) {
            for (let element of elements) {
                this.remove(element, error);
            }
        }

        for (let { error, elements } of instruction.render) {
            for (let element of elements) {
                this.add(element, error);
            }
        }
    }

    add(element, error) {
        const formGroup = element;
        const label = element.querySelector("label");

        if (!formGroup) {
            return;
        }
        // add the has-error class to the enclosing form-group div
        formGroup.classList.add('has-error');

        // add help-block
        const message = document.createElement('small');
        message.className = 'aurelia-validation-message error';
        label.className = 'error';
        message.textContent = error.message;
        message.id = `validation-message-${error.id}`;
        formGroup.appendChild(message);
    }

    remove(element, error) {
        const formGroup = element;
        const label = element.querySelector("label");
        if (!formGroup) {
            return;
        }

        // remove help-block
        const message = formGroup.querySelector(`#validation-message-${error.id}`);
        if (message) {
            formGroup.removeChild(message);

            // remove the has-error class from the enclosing form-group div
            if (formGroup.querySelectorAll('.aurelia-validation-message .error').length === 0) {
                formGroup.classList.remove('has-error');
                label.classList.remove('error');
            }
        }
    }
}