import { customElement, bindable } from 'aurelia-framework';


@bindable({ name: 'tabs', defaultValue: [] })
@bindable({ name: 'objId', defaultValue: null })
@bindable({ name: 'class', defaultValue: ''})
export class MyTabList {
    constructor() {

    }
}