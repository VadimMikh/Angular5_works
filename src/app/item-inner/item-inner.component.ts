import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-item-inner',
  templateUrl: './item-inner.component.html',
  styleUrls: ['./item-inner.component.scss']
})
export class ItemInnerComponent implements OnInit {

  product;

  constructor(
      private mainService: MainService,
      private activatedRoute: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      const id = +params['id'];
      this.product = this.mainService.getItem(id)[0];
      console.log(this.product);
    });
  }

}
