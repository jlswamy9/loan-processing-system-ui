import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanAppDetails } from '../components/loan-app-details/loan-app-details';
import {  LoanApplicationDetails } from '../models/loan-application-details';
import { ChangeStatusRequest } from '../models/change-status-request';

@Injectable({
  providedIn: 'root'
})
export class LoanAppService {
  base_url:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getAllLoans():Observable<LoanApplicationDetails[]>{
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans');
  }
  getAllLoansByBranch(branchId:any):Observable<LoanApplicationDetails[]>{
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans?branchId'+branchId);
  }
   getByLoanId(loanId:any):Observable<LoanApplicationDetails[]>{
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans?id='+loanId);
  }

  updateLoanById(loanId:any,loanDetails:LoanApplicationDetails):Observable<LoanApplicationDetails>{
    return this.http.patch<LoanApplicationDetails>(this.base_url+'/loans/'+loanId,loanDetails);
  }

  createLoan(loanDetails:LoanApplicationDetails):Observable<LoanApplicationDetails>{
    return this.http.post<LoanApplicationDetails>(this.base_url+'/loans',loanDetails);
  }

  changeStatus(loanId?:any,loanDetails?:ChangeStatusRequest):Observable<LoanApplicationDetails>{
    return this.http.patch<LoanApplicationDetails>(this.base_url+"/loans/"+loanId,loanDetails);
  }

  getPendingLoansByRole(assignedTo?:any){
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans?assignedTo='+assignedTo);
  }

  getProcessedLoansByRole(assignedTo?:any){
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans/statusHistory?assignedTo='+assignedTo);
  }

  getPendingLoansByBranchAndRole(assignedTo?:any){
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans?assignedTo='+assignedTo);
  }

  getProcessedLoansByBranchRole(branchId:any,assignedTo?:any){
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans/statusHistory?assignedTo='+assignedTo);
  }
}
