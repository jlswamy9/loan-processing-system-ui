import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.html',
  styleUrl:'./kyc-form.css'
})
export class KycForm implements OnInit {
  kycForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.kycForm = this.fb.group({
      aadharNumber: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      panNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
      otherDocType: [''],
      otherDocFile: [null],
      namePrefix: ['', Validators.required],
      applicantName: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      communicationAddress: ['', Validators.required],
      sameAsPermanent: [false],
      mobile1: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      mobile2: [''],
      email: [''],
      socialCategory: ['', Validators.required],
      obcSubCategory: [''],
      gender: ['', Validators.required],
      nationality: ['INDIAN', Validators.required],
      maritalStatus: [''],
      dob: ['', Validators.required],
      age: [{ value: '', disabled: true }],
      applicantImage: ['', Validators.required],
      signature: [''],
      isGuarantorRequired: [false]
    });

    // Auto-fill logic
    this.kycForm.get('dob')?.valueChanges.subscribe(dob => {
      if (dob) {
        const age = this.calculateAge(new Date(dob));
        this.kycForm.get('age')?.setValue(age);
        this.checkGuarantorRequirement(age);
      }
    });

    this.kycForm.get('sameAsPermanent')?.valueChanges.subscribe(val => {
      if (val) {
        const perm = this.kycForm.get('permanentAddress')?.value;
        this.kycForm.get('communicationAddress')?.setValue(perm);
      }
    });
  }

  calculateAge(dob: Date): number {
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  checkGuarantorRequirement(age: number) {
    const policyAgeLimit = 60; // assume from config
    if (age > policyAgeLimit) {
      // Show modal or flag for guarantor requirement
      this.kycForm.get('isGuarantorRequired')?.setValue(true);
      alert('Age exceeds policy limit. Add a co-applicant or guarantor.');
    }
  }

  onSubmit() {
    // if (this.kycForm.valid) {
    //   console.log(this.kycForm.value);
    // }
    this.router.navigate(['loans','create','basic']);
  }
}
