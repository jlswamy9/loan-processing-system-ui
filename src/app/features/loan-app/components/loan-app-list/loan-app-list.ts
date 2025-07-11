import { ChangeDetectorRef, Component } from '@angular/core';
import { LoanApplication } from '../../models/loan-application';
import { LoanAppService } from '../../services/loan-app-service';
import { LoanApplicationDetails } from '../../models/loan-application-details';

@Component({
  standalone:false,
  selector: 'app-loan-app-list',
  templateUrl: './loan-app-list.html',
  styleUrl: './loan-app-list.css'
})
export class LoanAppList {
items$!:any;
  loanApplications: LoanApplicationDetails[] = [];
  constructor(private loanService:LoanAppService,private cdr:ChangeDetectorRef){
  this.items$ = this.loanService.getAllLoans();
  }

  updateStatus(app: LoanApplication, newStatus: any) {
    app.status = newStatus;
  }
  statusClass(status: any): string {
    return status;
  }

  ngOnInit(){
setTimeout(()=>{
      this.getLoans();
    });   
  }

  
  getLoans(){
    this.loanService.getAllLoans().subscribe((data)=>{
        data.forEach(item=>{
          this.loanApplications = [...this.loanApplications,item];
        });
    });
  }
}
