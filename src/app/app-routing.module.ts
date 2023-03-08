import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasketComponent } from './components/basket/basket.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'catalogue', component: CatalogueComponent, canActivate: [AuthGuard]},
  { path: 'navbar', component: NavbarComponent ,canActivate: [AuthGuard]},
  { path: 'basket', component: BasketComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
