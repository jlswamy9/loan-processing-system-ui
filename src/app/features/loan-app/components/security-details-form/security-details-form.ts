import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-security-details-form',
  templateUrl: './security-details-form.html',
  styleUrl:'./security-details-form.css'
})
export class SecurityDetailsForm implements OnInit {
  securityForm!: FormGroup;
  isAgriLand: boolean = true; // Toggle based on loan type

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.securityForm = this.fb.group({
      securityType: ['Agri', Validators.required], // Agri or Non-Agri
      locations: this.fb.array([]),
      documents: this.fb.array([])
    });

    this.securityForm.get('securityType')?.valueChanges.subscribe(type => {
      this.isAgriLand = type === 'Agri';
      this.clearFormArrays();
      this.addLocation(); // Initial entry
    });

    this.addLocation(); // Default row
  }

  get locations(): FormArray {
    return this.securityForm.get('locations') as FormArray;
  }

  get documents(): FormArray {
    return this.securityForm.get('documents') as FormArray;
  }

  addLocation(): void {
    const group = this.fb.group({
      village: ['', Validators.required],
      mandal: ['', Validators.required],
      district: ['', Validators.required],
      ppbNumber: [''],
      dateOfIssue: [''],
      ecNumber: [''],
      syNo: [''],
      marketValue: [''],
      areaExtent: [''],
      irrigated: [''],
      natureOfLand: ['']
    });
    this.locations.push(group);
  }

  removeLocation(index: number): void {
    this.locations.removeAt(index);
  }

  clearFormArrays(): void {
    while (this.locations.length !== 0) this.locations.removeAt(0);
    while (this.documents.length !== 0) this.documents.removeAt(0);
  }

  onSubmit(): void {
    // if (this.securityForm.valid) {
    //   console.log('Security Details:', this.securityForm.value);
    // } else {
    //   this.securityForm.markAllAsTouched();
    // }

    this.router.navigate(['loans','create','appraisal']);
  }

  onBackClick(){
    this.router.navigate(['loans','create','basic']);
    
  }
}
