import { Component, OnInit } from '@angular/core';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { Router } from '@angular/router';
import { CatalogueService } from '../catalogue/catalogue.service';
import { Product } from '../catalogue/types/product';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
basketItems:Product[] = []
 basketItems$ = this.catalogueService.basketItems$
  constructor( private catalogueService: CatalogueService,
              ) { }

  ngOnInit() {
   
  }

}
