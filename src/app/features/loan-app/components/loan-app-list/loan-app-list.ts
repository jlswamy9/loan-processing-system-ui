import { ChangeDetectorRef, Component } from '@angular/core';
import { LoanApplication } from '../../models/loan-application';
import { LoanAppService } from '../../services/loan-app-service';
import { LoanApplicationDetails } from '../../models/loan-application-details';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoanAppDetails } from '../loan-app-details/loan-app-details';

@Component({
  standalone: false,
  selector: 'app-loan-app-list',
  templateUrl: './loan-app-list.html',
  styleUrl: './loan-app-list.css'
})
export class LoanAppList {

  loanApplications$ = new BehaviorSubject<LoanApplicationDetails[]>([]);
  loanApplications: LoanApplicationDetails[] = [];
  user!: any;
  selectedFilterValue: any = true;

  constructor(private loanService: LoanAppService, private cdr: ChangeDetectorRef) {
    let jsonStr = localStorage.getItem("user");
    if (jsonStr !== null) {
      this.user = JSON.parse(jsonStr);
    }
  }

  ngOnInit() {
    if(this.user.role === 'SUPERVISOR'){
 this.loanService.getAllLoansByBranch(this.user.branch.branchId).subscribe((data: LoanApplicationDetails[]) => {
      this.loanApplications$.next(data);
    });
    }
    else{
 this.loanService.getPendingLoansByRole(this.user.role).subscribe((data: LoanApplicationDetails[]) => {
      this.loanApplications$.next(data);
    });
    }
   
  }
  updateStatus(app: LoanApplication, newStatus: any) {
    app.status = newStatus;
  }
  statusClass(status: any): string {
    return status;
  }

  getProcessedLoansByRole() {
    this.loanService.getAllLoans().subscribe((data: LoanApplicationDetails[]) => {
      this.loanApplications = data.filter(loan=>loan.assignedTo !== this.user.role);
      this.loanApplications = this.loanApplications.filter((loan:LoanApplicationDetails) => loan.statusHistory  ? loan.statusHistory.some(history => history.assignedTo == this.user.role):[]);
      this.loanApplications$.next(this.loanApplications);
      console.log(this.loanApplications);
      console.log(this.user.role);
    });
  }

  onSelectionChange() {
    console.log(this.selectedFilterValue);
    if (this.selectedFilterValue === "true") {
      this.loanService.getPendingLoansByRole(this.user.role).subscribe((data: LoanApplicationDetails[]) => {
        this.loanApplications$.next(data);
      });
    }
    else {
      this.getProcessedLoansByRole();
    }
  }
}
