import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CatalogueState } from 'src/app/store/catalogue.state';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

constructor() { }
@Select(CatalogueState.quantity) quantity$!: Observable<number>;
}
