import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EliteService } from '../elite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public familyForm !: FormGroup;

  constructor(private _fb: FormBuilder, private service:EliteService, private route:ActivatedRoute) {
    this.familyForm = this._fb.group({
      familyInfo: this._fb.array([this.addFamilyGroup()])
    });
  }
  
  private addFamilyGroup(): FormGroup {
    return this._fb.group({
      father: [],
      mother: [],
      siblingsNo: [],
      fatherOccupation : []
    });
  }
 
  
  removeAddress(index: number): void {
    this.familyArray.removeAt(index);
  }
 

  get familyArray(): FormArray {
    return <FormArray>this.familyForm.get('familyInfo');
  }

  addFamilyInfo(): void{
    this.familyArray.push(this.addFamilyGroup());
  }

  // add reactive data without id
  onSubmit(): void {
    if (this.familyForm.valid) {
      const familyInfoData = this.familyArray.value;
      this.service.createFamilyInfo1(familyInfoData).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
        },
        (error) => {
          console.error('Error submitting form', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // add reactive data with id from data table
  submit(): void {
  if (this.familyForm.valid) {
    const eliteId = this.getEliteId(); // Get the Elite ID from somewhere
    const familyInfoData = this.familyArray.value;
    this.service.createFamilyInfo(eliteId, familyInfoData).subscribe(
      (response) => {
        console.log('Form submitted successfully', response);
      },
      (error) => {
        console.error('Error submitting form', error);
      }
    );
  } else {
    console.log('Form is invalid');
  }
}

private getEliteId(): number {
  const eliteId = this.route.snapshot.paramMap.get('id');
  if (eliteId) {
    return parseInt(eliteId, 10);
  } else {
    throw new Error('Elite ID not found in route parameters');
  }
}

}