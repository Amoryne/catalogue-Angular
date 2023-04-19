import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './types/product';
import { BasketComponent } from '../basket/basket.component';
import { Select, Store } from '@ngxs/store';
import { Catalogue } from 'src/app/store/catalogue.actions';
import { CatalogueState } from 'src/app/store/catalogue.state';
import { AddOrderBtnComponent } from './components/add-order-btn/add-order-btn.component';

@Injectable()
export class CatalogueService {

  constructor(private http: HttpClient, private store: Store) { }

  private readonly api: string = 'https://fakestoreapi.com/'
  //créer un tableau de produits ajouté au panier et la quantité
  private basketItems: Product[] = []
  // basketItems$: BehaviorSubject<Product[]> = new  BehaviorSubject<Product[]>([])
  @Select(CatalogueState.items) basketItems$!: Observable<Product[]>;


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + "products")
  }
  getLimitedProducts(): Observable<Product[]> {
    let params = new HttpParams().set('limit', '16');
    return this.http.get<Product[]>(this.api + "products", { params })
  }
  //fonction pour vérifier si un article a été rajouter et sinon le rajouter dans le panier et l'incrémenter
  addToBasket(product: Product) {
    this.store.dispatch(new Catalogue.AddItem(product))

  }
  //afficher les items du panier
  getBasketItems() {
    return this.basketItems;
  }


}
