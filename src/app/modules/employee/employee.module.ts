import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { NewEmployeeModalComponent } from '../new-employee-modal';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [EmployeeComponent, NewEmployeeModalComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  entryComponents:[ NewEmployeeModalComponent ]
})
export class EmployeeModule { }
