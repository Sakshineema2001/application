import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormWizardComponent } from './update-form-wizard.component';

describe('UpdateFormWizardComponent', () => {
  let component: UpdateFormWizardComponent;
  let fixture: ComponentFixture<UpdateFormWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
