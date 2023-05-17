import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EliteService } from '../elite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-family-info',
  templateUrl: './update-family-info.component.html',
  styleUrls: ['./update-family-info.component.css']
})
export class UpdateFamilyInfoComponent {
  public familyForm!: FormGroup;

  constructor(private _fb: FormBuilder, private service: EliteService, private route: ActivatedRoute) {
    this.familyForm = this._fb.group({
      familyInfo: this._fb.array([])
    });
  }

  ngOnInit() {
    const eliteId = this.getEliteId();
    this.service.getFamilyInfoByEliteId(eliteId).subscribe(
      (familyInfoList: any[]) => {
        this.populateFamilyInfo(familyInfoList);
      },
      (error) => {
        console.error('Error fetching family info', error);
      }
    );
  }

  private populateFamilyInfo(familyInfoList: any[]) {
    const familyInfoControls = familyInfoList.map((familyInfo) => this._fb.group(familyInfo));
    this.familyForm.setControl('familyInfo', this._fb.array(familyInfoControls));
  }

  removeFamilyInfo(index: number): void {
    this.familyArray.removeAt(index);
  }

  get familyArray(): FormArray {
    return <FormArray>this.familyForm.get('familyInfo');
  }

  addFamilyInfo(): void {
    this.familyArray.push(this.addFamilyGroup());
  }

  addFamilyGroup(): FormGroup {
    return this._fb.group({
      father: [],
      mother: [],
      siblingsNo: [],
      fatherOccupation: []
    });
  }

  submit(): void {
    if (this.familyForm.valid) {
      const eliteId = this.getEliteId();
      const familyInfoData = this.familyArray.value;
      this.service.updateFamilyInfo(eliteId, familyInfoData).subscribe(
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
