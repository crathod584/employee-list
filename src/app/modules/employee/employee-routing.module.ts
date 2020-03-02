import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './';


const routes: Routes = [
 {
  	path:'',
  	redirectTo:'office-employee',
  	pathMatch:'full'
  },
  {
    path: 'office-employee',
    component: EmployeeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
