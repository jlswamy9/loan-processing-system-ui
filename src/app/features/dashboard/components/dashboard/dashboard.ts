import { Component } from '@angular/core';
import { User } from '../../../auth/models/user';

@Component({
  standalone:false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  user!:User;
  constructor(){
     if(localStorage.getItem("user") !== null){
      let userStr = localStorage.getItem("user");
      this.user = JSON.parse(userStr ? userStr:"");
    }
  }
  
}
