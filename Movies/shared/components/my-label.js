import { customElement, bindable } from 'aurelia-framework';
  
@bindable({ name: 'objId', defaultValue: null })
@bindable({ name: 'name', defaultValue: '' })
@bindable({ name: 'value', defaultValue: '' })
export class MyLabel {

}