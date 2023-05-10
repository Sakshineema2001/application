import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEliteComponent } from './update-elite.component';

describe('UpdateEliteComponent', () => {
  let component: UpdateEliteComponent;
  let fixture: ComponentFixture<UpdateEliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
