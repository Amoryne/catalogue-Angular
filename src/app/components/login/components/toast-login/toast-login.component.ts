import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toast-login',
  templateUrl: './toast-login.component.html',
  styleUrls: ['./toast-login.component.css']
})
export class ToastLoginComponent {
showToast:boolean = false;
message: string = ""

show():void{
  this.showToast = true
  setTimeout(() => this.showToast = false, 5000);
  
}

}
