import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: []
})
export class AddItemComponent implements OnInit {
    constructor() { }

    newName: string;
    newPrice: number;
    newCategory: number;

    @Output()
    addItemHandle = new EventEmitter<object>();

    addItem() {
        const newItem = {
            id: 0,
            name: this.newName,
            price: this.newPrice,
            category: this.newCategory
        };
        this.newName = ''; this.newPrice = null; this.newCategory = null;
        this.addItemHandle.emit(newItem);
    }

    ngOnInit() {}
}
