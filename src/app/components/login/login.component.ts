import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login.service';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { Router } from '@angular/router';
import { ToastLoginComponent } from './components/toast-login/toast-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  @ViewChild(ToastLoginComponent) toastLoginComponent!: ToastLoginComponent;
  constructor(private router: Router,private service: LoginService ) { }

  login(): void {
    
    if (this.service.login(this.username, this.password)) {
      console.log("connexion réussie")
      this.router.navigate(['/catalogue'])
      
    }
    else {
      console.log("connexion échouée")
      this.toastLoginComponent.show()
      this.toastLoginComponent.message = "Mot de passe ou Identifiant incorrectes"
    }
  }


}
