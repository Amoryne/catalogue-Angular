import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {
  pipe(arg0: any): boolean | import("@angular/router").UrlTree {
    throw new Error('Method not implemented.');
  }

  private isLogged: boolean = false
  private token!: string;

  login(username: string, password: string): boolean {


    if (username === "admin" && password === "admin") {
      this.isLogged = true;

    }
    return this.isLogged;

  }

  
  logout(): boolean {
   return this.isLogged = false;
  }

  isAuth(): boolean {
    return this.isLogged;
  }



  isLoggin() {
    this.token = 'MyFakeToken';
  }

  getToken() {
    return this.isLogged;
  }
}

  
  

  


