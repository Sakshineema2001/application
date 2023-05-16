import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { RegisterComponent } from './register/register.component';
import { UpdateEliteComponent } from './update-elite/update-elite.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UpdateFamilyInfoComponent } from './update-family-info/update-family-info.component';

const routes: Routes = [
  {
       path : 'register',
       component: RegisterComponent
  },
  {
     path: 'data-table', 
     component: DataTableComponent,
  },
  {
    path: 'update/:id',
    component: UpdateEliteComponent
  },
  {
    path: 'add-form-wizard',
    component: FormWizardComponent
  },
  {
    path: 'reactive-form-group/:id',
    component: ReactiveFormComponent
  },
  {
    path: 'reactive-form-group',
    component: ReactiveFormComponent
  },
  {
    path: 'reactive-update/:id',
    component: UpdateFamilyInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
