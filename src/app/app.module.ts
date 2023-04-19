import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginService } from './components/login/login.service';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { Router, RouterModule } from '@angular/router';
import { ToastLoginComponent } from './components/login/components/toast-login/toast-login.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueService } from './components/catalogue/catalogue.service';
import { NgxsModule } from '@ngxs/store';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasketComponent } from './components/basket/basket.component';
import { AuthGuard } from './auth.guard';
import { CatalogueState } from './store/catalogue.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AddOrderBtnComponent } from './components/catalogue/components/add-order-btn/add-order-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogueComponent,
    ToastLoginComponent,
    NavbarComponent,
    BasketComponent,
    AddOrderBtnComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxsModule.forRoot([CatalogueState],{developmentMode: true}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled:false})

  ],
  providers: [LoginService, CatalogueService,AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
