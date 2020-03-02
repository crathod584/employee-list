import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee-modal',
  templateUrl: './new-employee-modal.component.html',
  styleUrls: ['./new-employee-modal.component.css']
})
export class NewEmployeeModalComponent implements OnInit {
  
  @Output() getData = new EventEmitter(); 

  employeeForm: FormGroup;
  employeeData:any;
  
  constructor(private fb: FormBuilder,private employeeService:EmployeeService, public modalRef: BsModalRef) {
    this.createForm();
  }

  ngOnInit() {
    this.employeeForm.patchValue(this.employeeData);
  }

  get form() { return this.employeeForm.controls; }

  createForm() {
    this.employeeForm = this.fb.group({
      address: ["", Validators.required],
      category: ["", Validators.required],
      categoryid: [null],
      contact: ["", Validators.required],
      description: ["", Validators.required],
      empcode: [null],
      id: [null],
      image: [null],
      name: ["", Validators.required],

    });
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeForm.value).subscribe((res) =>{
      this.getData.emit();
      this.modalRef.hide();
    }, (err) => {
      //I dont have API for update so to give you running code i have put things in err, if we have API than we can remove following 2 lines
      this.getData.emit();
      this.modalRef.hide();
    });
  }
}
