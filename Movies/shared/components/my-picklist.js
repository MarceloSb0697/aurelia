import { bindable, bindingMode } from 'aurelia-framework';

@bindable('objId')
@bindable('list')
@bindable('name')
@bindable({ name: 'class', default: '' })
@bindable({ name: 'alignment', default: '' })
@bindable({ name: 'selectAll', default: true })
export class MyPicklist {
    constructor() {
        this.allChecked = true;
        this.allIndeterminate = false;
    } 

    attached() {
        this.setAllChecked();
    }

    checkAll() {
        this.allIndeterminate = false;
        this.list.forEach(x => x.checked = this.allChecked);
    }

    singleCheck() {
        this.setAllChecked();
    }

    setAllChecked() {
        if (this.selectAll) {
            let allChecked = this.list.filter(x => x.checked).length;
            //in case is 0
            if (allChecked == 0) {
                this.allChecked = false;
                this.allIndeterminate = false;
            }
            //in case all are checked
            else if (allChecked == this.list.length) {
                this.allChecked = true;
                this.allIndeterminate = false;
            }
            else {
                this.allIndeterminate = true;
                this.allChecked = false;
            }
        }
    }
}