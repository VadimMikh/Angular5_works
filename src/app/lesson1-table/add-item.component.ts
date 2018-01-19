import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
    constructor() { }

    newName: string;
    newPrice: number;
    newCategory: number;

    @Output()
    addItemHandle = new EventEmitter<object>();

    addItem(form) {
        console.log(form);
        if (this.newCategory > 3 || this.newCategory < 1) {
            alert('Enter category between 1 - 3');
            return;
        }
        const newItem = {
            id: 0,
            name: this.newName,
            price: this.newPrice,
            category: this.newCategory
        };
        form.reset();
        // this.newName = ''; this.newPrice = null; this.newCategory = null;
        this.addItemHandle.emit(newItem);

    }

    ngOnInit() {}
}
