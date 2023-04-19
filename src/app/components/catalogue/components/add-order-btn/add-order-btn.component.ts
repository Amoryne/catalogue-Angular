import { Component, OnInit } from '@angular/core';
import { Catalogue } from 'src/app/store/catalogue.actions';
import { CatalogueService } from '../../catalogue.service';
import { Product } from '../../types/product';


@Component({
  selector: 'app-add-order-btn',
  templateUrl: './add-order-btn.component.html',
  styleUrls: ['./add-order-btn.component.css']
})
export class AddOrderBtnComponent implements OnInit {

  constructor(private catalogueService: CatalogueService ) { }

  ngOnInit() {
  }

}
