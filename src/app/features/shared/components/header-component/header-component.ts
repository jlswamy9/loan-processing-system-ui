import { Component, Input } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-header-component',
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  @Input()
  hideNavbar:boolean = false;

  constructor(
    private authService:AuthService,
    private router:Router

  ){}

  logout(){
    console.log("Hello");
    this.authService.logout();
    this.router.navigate(['login']);

  }
}
