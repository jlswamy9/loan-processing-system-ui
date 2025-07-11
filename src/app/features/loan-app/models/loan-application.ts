export interface LoanApplication {
  id: number;
  fullName: string;
  loanAmount: number;
  loanPurpose: string;
  status?: 'REJECTED' | 'SUBMITTED' | 'BANK_MANAGER_APPROVED' | 'LOAN_DEPT_CLERK_APPROVED' | 'LOAN_DEPT_ASM_APPROVED'|'LOAN_DEPT_MANAGER_APPROVED' | 'AGM_APPROVED' | 'DGM_APPROVED'|'GM_APPROVED'|'CEO_APPROVED';

}