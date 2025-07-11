import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service';
import { User } from '../../../auth/models/user';

@Component({
  standalone:false,
  selector: 'app-side-nav-component',
  templateUrl: './side-nav-component.html',
  styleUrl: './side-nav-component.css'
})
export class SideNavComponent {
  user!:User;
  constructor(private authService:AuthService){}

  ngOnInit(){
    let usrStr = localStorage.getItem("user");
    this.user = JSON.parse(usrStr ? usrStr:"");
  }
}
