import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { ProductList } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private mainService: MainService, private router: Router) { }

  productList: ProductList[];

  ngOnInit() {
    this.productList = this.mainService.getProducts();
  }

  goToItem(item) {
    this.router.navigate(['home', 'product', item.id]);
  }

}
