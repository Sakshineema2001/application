import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { RegisterComponent } from './register/register.component';
import { UpdateEliteComponent } from './update-elite/update-elite.component';

const routes: Routes = [
  {
       path : '',
       component: RegisterComponent
  },
  {
     path: 'data-table', 
     component: DataTableComponent,
  },
  {
    path: 'update/:id',
    component: UpdateEliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
