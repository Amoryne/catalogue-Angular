import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private service: LoginService,
              private navbarService: NavbarService) { }

  ngOnInit() {
  }
basketButton(){
  this.router.navigate(['/basket'])
}
logout(): void{
  this.service.logout()
    this.router.navigate(['/'])

  
}
quantity$ = this.navbarService.quantity$
 
}
