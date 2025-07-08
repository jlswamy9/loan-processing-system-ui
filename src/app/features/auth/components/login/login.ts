import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  standalone:false,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userType!:string;
  loginForm!:FormGroup;
   constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router
  ) {
    this.loginForm = fb.group({
      userId: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    }

    ngOnInit(){
      this.userType = this.route.snapshot.queryParamMap.get('userType') || 'user';
    }

  onSubmit(): void {
    if (this.loginForm.valid) {
       this.authService.getUserByUserNameAndPassword(this.loginForm.value.email,this.loginForm.value.password).subscribe(users=>{
     if(users.length == 0){
      console.error("User not found!");
      this.loginForm.setErrors({invalid:true});
     }
     else{
      console.log("User loggedin succesfully!");
      localStorage.setItem("user",JSON.stringify(users[0]));
      this.router.navigate(['dashboard']);
     }
    });
      // Add your authentication logic here
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  
  login(userId:string,password:string){
    
  }
}
