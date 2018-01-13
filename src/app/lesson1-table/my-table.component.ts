import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {MainService} from '../main.service';

@Component ({
    selector: 'app-my-table',
    templateUrl: './my-table.component.html',
    styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
    @Input() rows = 0;

    @Output()
    deleteTrigger: EventEmitter<number> = new EventEmitter();

    productsToShow = [];
    products = [];
    category = 1;
    productsService = [];

    constructor(private mainService: MainService) {}

    ngOnInit() {
        this.productsService = this.mainService.getProducts();
        this._filterItems(this.productsService);
    }

    _filterItems(arr) {
        const tempArr = arr.filter((el, i) => i < this.rows);
        this.productsToShow = tempArr;
    }

    delete(id: number) {
        this.productsToShow = this.mainService.deleteProduct(id);
        this.deleteTrigger.emit(id);
    }

    addItem(item) {
        this.products = this.mainService.addItem(item);
        this._filterItems(this.products);
    }
}
