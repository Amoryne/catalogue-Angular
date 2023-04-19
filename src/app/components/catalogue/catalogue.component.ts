import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Subject, take, takeUntil } from 'rxjs';
import { CatalogueService } from './catalogue.service';
import { Product } from './types/product';
import { BasketComponent } from '../basket/basket.component';
import { AddOrderBtnComponent } from './components/add-order-btn/add-order-btn.component';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit, OnDestroy {
  basketItems:Product[] = []

@Input() products: Product[] = []


private unsubscribe$: Subject<void> = new Subject<void> ()
ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
}
  constructor(private catalogueService: CatalogueService) {}

  ngOnInit() {
      this.catalogueService.basketItems$.subscribe(x => console.log(x))
    this.catalogueService.getLimitedProducts().pipe(
      // map(x => {
      //   return [x[0],x[1]]
      // }),
      
      takeUntil(this.unsubscribe$)
    ).subscribe((data) => {
      this.products = data;
    });
    console.log(this.catalogueService.getLimitedProducts())
  }
//créer la fonction pour le bouton lié au service
  addToBasket(product: Product){
    this.catalogueService.addToBasket(product)
  }
  

  
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }



}
