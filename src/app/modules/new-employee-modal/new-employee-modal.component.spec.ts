import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeModalComponent } from './new-employee-modal.component';

describe('NewEmployeeModalComponent', () => {
  let component: NewEmployeeModalComponent;
  let fixture: ComponentFixture<NewEmployeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmployeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
