import { Component, Input } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service';
import { Router } from '@angular/router';
import { User } from '../../../auth/models/user';

@Component({
  standalone:false,
  selector: 'app-header-component',
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  @Input()
  hideNavbar:boolean = false;
  user!:User

  constructor(
    private authService:AuthService,
    private router:Router
  ){
   
  }
  ngOnInit(){
    let jsonStr = localStorage.getItem("user");
    if (jsonStr !== null) {
      this.user = JSON.parse(jsonStr);
    }
  }

  logout(){
    console.log("Hello");
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
