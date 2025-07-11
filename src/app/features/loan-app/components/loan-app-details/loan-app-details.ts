import { Component } from '@angular/core';
import { LoanApplicationDetails } from '../../models/loan-application-details';
import { User } from '../../../auth/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanAppService } from '../../services/loan-app-service';
import { Observable, switchMap } from 'rxjs';

@Component({
  standalone:false,
  selector: 'app-loan-app-details',
  templateUrl: './loan-app-details.html',
  styleUrl: './loan-app-details.css'
})
export class LoanAppDetails {
    user!:User;
    loanId!:any;
    loanDetails$!:Observable<LoanApplicationDetails[]>;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private loanService:LoanAppService
  ){
    this.loanDetails$ = this.route.queryParamMap.pipe(
      switchMap(params=>{
          const id = params.get('loanId');
        return this.loanService.getByLoanId(id);
      })
    );
  }
  ngOnInit(){
    let usrStr = localStorage.getItem("user");
    this.user = JSON.parse(usrStr ? usrStr:"");
    this.loanId = this.route.snapshot.queryParamMap.get("loanId");
    console.log(this.loanId);

  }

  updateStatus(newStatus:any) {
    // if (this.application) {
    //   this.application.status = newStatus;
    //   alert(`Application ${newStatus}`);
    // }
  }
  editLoanApplication(){
    console.log(this.loanId);
    this.router.navigate(['loans','create'],{queryParams:{loanId:this.loanId}});
  }
}
