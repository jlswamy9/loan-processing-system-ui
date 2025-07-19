import { StatusHistory } from "./loan-application-details";

export interface ChangeStatusRequest{
  status?: 'DRAFT'|'REJECTED' | 'SUBMITTED' | 'MANAGER_APPROVED' | 'LOAN_DEPT_CLERK_APPROVED' | 'LOAN_DEPT_ASM_APPROVED'|'LOAN_DEPT_MANAGER_APPROVED' | 'AGM_APPROVED' | 'DGM_APPROVED'|'GM_APPROVED'|'CEO_APPROVED';
  assignedTo?:'' | 'BANK_MANAGER'|'AUDITOR' | 'LOAN_DEPT_CLERK' | 'LOAN_DEPT_ASM' | 'LOAN_DEPT_ASM' |'LOAN_DEPT_MANAGER' | 'AGM' | 'DGM' | 'GM' | 'CEO';
  statusHistory?:StatusHistory[]
}