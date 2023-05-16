import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EliteService } from '../elite.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public familyForm !: FormGroup;

  constructor(private _fb: FormBuilder, private service:EliteService) {
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

  submit(): void {
    if (this.familyForm.valid) {
      const familyInfoData = this.familyArray.value;
      this.service.createFamilyInfo(familyInfoData).subscribe(
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

}