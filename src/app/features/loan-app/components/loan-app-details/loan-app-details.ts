import { Component } from '@angular/core';
import { LoanApplicationDetails, StatusHistory } from '../../models/loan-application-details';
import { User } from '../../../auth/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanAppService } from '../../services/loan-app-service';
import { Observable, switchMap } from 'rxjs';
import { ChangeStatusRequest } from '../../models/change-status-request';

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
    loanApplicationDetails!:LoanApplicationDetails;
    changeStatusRequest?:ChangeStatusRequest;
    statusHistory?:StatusHistory[] = [];
    reviewerComments:string = "";

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
    this.getLoanDetails();
  }

  getLoanDetails(){
    this.loanDetails$.subscribe(data=>{
        if(data.length > 0){
          this.loanApplicationDetails = data[0];
        }
    });
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

  changeStatus(assignedTo:any,status:any){
   this.statusHistory = this.loanApplicationDetails.statusHistory;
   let newStatusHistory:StatusHistory = {
    assignedTo:assignedTo,
    status:status,
    dateTime:Date.now(),
    comments:this.reviewerComments
   };

   this.statusHistory?.push(newStatusHistory);

    this.changeStatusRequest = {
      assignedTo:assignedTo,
      status:status,
      statusHistory:this.statusHistory
    }

    this.loanService.changeStatus(this.loanId,this.changeStatusRequest).subscribe((data=>{
        if(data){
          console.log("Application submitted succesfully!");
          this.router.navigate(['loans']);
        }
    }
  ));
  }

  agmApproved(loan:any){
    loan.loanAmount > 5000000 ? this.changeStatus('GM','AGM_APPROVED'):this.changeStatus('DGM','AGM_APPROVED');
  }

  approveLoan(status:any){
    this.changeStatus('BANK_MANAGER',status);
  }
}
