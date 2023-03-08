import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './types/product';
import { BasketComponent } from '../basket/basket.component';

@Injectable()
export class CatalogueService {

constructor(private http: HttpClient) { }

private readonly api: string = 'https://fakestoreapi.com/'
//créer un tableau de produits ajouté au panier et la quantité
private basketItems: Product[] = []
quantity: number = 0

getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.api + "products")
}
getLimitedProducts():Observable<Product[]>{
  let params = new HttpParams().set('limit', '16');
  return this.http.get<Product[]>(this.api + "products", {params})
}
//fonction pour vérifier si un article a été rajouter et sinon le rajouter dans le panier et l'incrémenter
addToBasket(product: Product){
  const itemIndex = this.basketItems.findIndex(item => item.id === product.id)
  if(itemIndex > -1){
    this.basketItems[itemIndex].quantity++
  } else{
    this.basketItems.push({...product, quantity:1})
  }

}
//afficher les items du panier
getBasketItems(){
    return this.basketItems;
  }
}
