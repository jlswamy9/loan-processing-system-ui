import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { LoanApplicationDetails } from '../../models/loan-application-details';
import { LoanAppService } from '../../services/loan-app-service';

@Component({
  standalone:false,
  selector: 'app-loan-app-form',
  templateUrl: './loan-app-form.html',
  styleUrl: './loan-app-form.css'
})
export class LoanAppForm {
  loanForm: FormGroup;
  submitted = false;
  loanDetails$!:Observable<LoanApplicationDetails[]>;
  applicationData!:LoanApplicationDetails;
  loanId!:any;
  mode?:'create' | 'update' = "create";

  constructor(private fb: FormBuilder, private router:Router,private loanService:LoanAppService,private route:ActivatedRoute) {
    this.loanDetails$ = this.route.queryParamMap.pipe(
      switchMap(params=>{
          const id = params.get('loanId');
          console.log("hi");
        return this.loanService.getByLoanId(id);
      })
    );
    this.loanForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      idNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: [''],
      employer: [''],
      position: [''],
      income: [null],
      loanAmount: [null, Validators.required],
      loanPurpose: ['', Validators.required],
      repaymentPeriod: [null]
    }); 
  }

  ngOnInit(){
    this.loanId = this.route.snapshot.queryParamMap.get('loanId');
    this.getLoanById();
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.loanForm.valid) {
      console.log('Loan Application:', this.loanForm.value);
      console.log("Mode : "+this.mode);
      if(this.mode === "update"){
        this.updateLoanDetails();
      }
      else{
        this.submitNewLoan();
      }
    }
  }
  updateLoanDetails(){
    let application:LoanApplicationDetails = this.loanForm.value;
    application.status = 'SUBMITTED';
    this.loanService.updateLoanById(this.loanId,application).subscribe((res:any)=>{
      this.applicationData = res;
    },(err)=>{},
  ()=>{
      this.loanForm.reset();
      this.submitted = false;
      this.router.navigate(['loans','details'],{queryParams:{loanId:this.loanId}});
  });
  }

   submitNewLoan(){
    let application:LoanApplicationDetails = this.loanForm.value;
    application.status = 'SUBMITTED';
    this.loanService.createLoan(application).subscribe((res:any)=>{
      this.applicationData = res;
    },(err)=>{},
  ()=>{
      this.loanForm.reset();
      this.submitted = false;
      this.router.navigate(['loans','details'],{queryParams:{loanId:this.applicationData.id}});
  });
  }

  getLoanById(){
    this.loanService.getByLoanId(this.loanId).subscribe(data=>{
      console.log(data);
      if(data.length > 0){
        this.mode = "update";
      this.applicationData = data[0];
      this.loanForm.patchValue(
        {
        fullName:this.applicationData.fullName,
        idNumber:this.applicationData.idNumber,
      dob: this.applicationData.dob,
      email: this.applicationData.email,
      phone: this.applicationData.phone,
      address: this.applicationData.address,
      employer: this.applicationData.employer,
      position: this.applicationData.position,
      income: this.applicationData.income,
      loanAmount: this.applicationData.loanAmount,
      loanPurpose: this.applicationData.loanPurpose,
      repaymentPeriod: this.applicationData.repaymentPeriod
        }
      );
    }
    else{
      this.mode = "create";
    }
    });
  }

}
