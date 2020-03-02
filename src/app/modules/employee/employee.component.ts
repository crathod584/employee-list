import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { EmployeeService } from '../employee.service';
import { NewEmployeeModalComponent } from '../new-employee-modal';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  modalRef: BsModalRef;
  employeeData:any;
  
  constructor(private modalService: BsModalService, private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getData();
  }
  
  openModal(employee:any) {

    let config: ModalOptions = {
      class: 'modal-dialog modal-lg',
      initialState: {
        employeeData: employee
      }
    }

    this.modalRef = this.modalService.show(NewEmployeeModalComponent,config);
  }

  getData(){
    this.employeeService.getData().subscribe((res) =>{
      this.employeeData = res.Success;
    }, (err) => {
      console.log('err',err)
    });
  }
}
