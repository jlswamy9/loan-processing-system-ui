import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanAppDetails } from '../components/loan-app-details/loan-app-details';
import { LoanApplicationDetails } from '../models/loan-application-details';

@Injectable({
  providedIn: 'root'
})
export class LoanAppService {
  base_url:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getAllLoans():Observable<LoanApplicationDetails[]>{
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans');
  }
   getByLoanId(loanId:any):Observable<LoanApplicationDetails[]>{
    return this.http.get<LoanApplicationDetails[]>(this.base_url+'/loans?id='+loanId);
  }

  updateLoanById(loanId:any,loanDetails:LoanApplicationDetails):Observable<LoanApplicationDetails>{
    return this.http.put<LoanApplicationDetails>(this.base_url+'/loans/'+loanId,loanDetails);
  }

  createLoan(loanDetails:LoanApplicationDetails):Observable<LoanApplicationDetails>{
    return this.http.post<LoanApplicationDetails>(this.base_url+'/loans',loanDetails);

  }
}
