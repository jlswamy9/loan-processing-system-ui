import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-basic-form',
  templateUrl: './basic-form.html',
  styleUrl:'./basic-form.css'
})
export class BasicForm implements OnInit {
  loanForm!: FormGroup;

  // Products for dropdowns
  secureProducts: string[] = ['KML', 'KNAML', 'NAML', 'LT', 'EDUCATION', 'PMEGP', 'HOUSING', 'SME', 'VEHICLE'];
  unsecureProducts: string[] = ['SHG', 'MUDRA', 'P M SVANIDHI', 'NFS', 'Personal'];

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      cid: ['', Validators.required],
      accountNumber: ['', Validators.required],
      cibilScore: ['', Validators.required],
      education: ['', Validators.required],
      occupation: ['', Validators.required],
      familyDetails: this.fb.array([]),
      loanType: ['Secure', Validators.required],
      product: ['', Validators.required],
      purpose: ['', Validators.required],
      purposeRemarks: [''],
      repaymentMode: ['', Validators.required],
      years: [0, [Validators.required, Validators.min(0)]],
      months: [0, [Validators.required, Validators.min(0)]],
      emiAmount: ['', Validators.required]
    });

    this.loanForm.get('purpose')?.valueChanges.subscribe(val => {
      const remarksControl = this.loanForm.get('purposeRemarks');
      if (val === 'Others') {
        remarksControl?.setValidators([Validators.required]);
      } else {
        remarksControl?.clearValidators();
      }
      remarksControl?.updateValueAndValidity();
    });
  }

  // Getter for familyDetails FormArray
  get familyDetails(): FormArray {
    return this.loanForm.get('familyDetails') as FormArray;
  }

  // Add a family member form group
  addFamilyMember(): void {
    const familyGroup = this.fb.group({
      name: ['', Validators.required],
      fatherOrSpouse: ['', Validators.required],
      relation: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]]
    });
    this.familyDetails.push(familyGroup);
  }

  // Remove family member by index
  removeFamilyMember(index: number): void {
    this.familyDetails.removeAt(index);
  }

  onSubmit(): void {
    // if (this.loanForm.valid) {
    //   console.log('Loan Basic Data:', this.loanForm.value);
    //   // You can emit data to parent or call API here
    // } else {
    //   this.loanForm.markAllAsTouched();
    // }
    this.router.navigate(['loans','create','security']);
  }

  onBackClick(){
    this.router.navigate(['loans','create']);

  }
}
