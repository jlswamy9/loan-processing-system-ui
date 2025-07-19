import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-credit-appraisal',
  templateUrl: './credit-appraisal.html',
  styleUrl:'./credit-appraisal.css'
})
export class CreditAppraisal implements OnInit {
  creditForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.creditForm = this.fb.group({
      liabilities: this.fb.group({
        loanType: ['', Validators.required],
        totalLoanAmount: ['', Validators.required],
        totalEMI: ['', Validators.required]
      }),
      incomeSource: ['', Validators.required],
      grossIncome: [''],
      netIncome: [''],
      autoIncome: [{ value: '', disabled: true }],
      businessName: [''],
      pan: [''],
      gst: [''],
      ownershipType: [''],
      last3YrIncome: [''],
      businessDocs: [''],
      rentIncome: [''],
      rentProof: [''],
      alliedType: [''],
      noOfUnits: [''],
      unitIncome: [{ value: '', disabled: true }],
      equipmentType: [''],
      isOwned: [''],
      acquisitionCost: [''],
      hireIncome: [{ value: '', disabled: true }]
    });

    this.setupListeners();
  }

  setupListeners() {
    this.creditForm.get('grossIncome')?.valueChanges.subscribe(() => this.calculateSalaryIncome());
    this.creditForm.get('netIncome')?.valueChanges.subscribe(() => this.calculateSalaryIncome());
    this.creditForm.get('noOfUnits')?.valueChanges.subscribe(() => this.calculateAlliedIncome());
    this.creditForm.get('isOwned')?.valueChanges.subscribe(() => this.calculateHireIncome());
    this.creditForm.get('acquisitionCost')?.valueChanges.subscribe(() => this.calculateHireIncome());
  }

  calculateSalaryIncome() {
    const net = this.creditForm.get('netIncome')?.value || 0;
    const calculated = (2 / 3) * net;
    this.creditForm.get('autoIncome')?.setValue(calculated);
  }

  calculateAlliedIncome() {
    const unitRate = 30000;
    const units = this.creditForm.get('noOfUnits')?.value || 0;
    this.creditForm.get('unitIncome')?.setValue(units * unitRate);
  }

  calculateHireIncome() {
    const cost = this.creditForm.get('acquisitionCost')?.value || 0;
    const owned = this.creditForm.get('isOwned')?.value;
    let income = 0;
    if (owned === 'Own') income = cost * 0.15;
    else if (owned === 'Finance') income = cost * 0.075;
    this.creditForm.get('hireIncome')?.setValue(income);
  }

  onSubmit() {
    if (this.creditForm.valid) {
      console.log('Credit Appraisal Data:', this.creditForm.value);
    } else {
      this.creditForm.markAllAsTouched();
    }
  }
  onBackClick(){
      this.router.navigate(['loans','create','security']);
  }
}