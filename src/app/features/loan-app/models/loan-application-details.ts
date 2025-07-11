export interface LoanApplicationDetails {
  id?: number;
  fullName?: string;
  idNumber?:string;
  dob?: string;
  email?: string;
  phone?: string;
  address?: string;
  employer?: string;
  position?: string;
  income?: number;
  loanAmount?: number;
  loanPurpose?: string;
  repaymentPeriod?: number;
  status?: 'REJECTED' | 'SUBMITTED' | 'MANAGER_APPROVED' | 'LOAN_DEPT_CLERK_APPROVED' | 'LOAN_DEPT_ASM_APPROVED'|'LOAN_DEPT_MANAGER_APPROVED' | 'AGM_APPROVED' | 'DGM_APPROVED'|'GM_APPROVED'|'CEO_APPROVED';
  assignedTo?:'' | 'BANK_MANAGER'|'AUDITOR' | 'LOAN_DEPT_CLERK' | 'LOAN_DEPT_ASM' | 'LOAN_DEPT_ASM' |'LOAN_DEPT_MANAGER' | 'AGM' | 'DGM' | 'GM' | 'CEO' 
}