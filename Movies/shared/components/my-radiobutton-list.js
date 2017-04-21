import { bindable, bindingMode } from 'aurelia-framework';

@bindable('objId')
@bindable('list')
@bindable('name') 
@bindable({ name: 'selected', defaultBindingMode: bindingMode.twoWay })
@bindable({ name: 'radioClass', default: '' })
@bindable({ name: 'alignment', default : ''})
export class MyRadiobuttonList {
    constructor() {  
        
    }
}