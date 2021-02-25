import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './works.component';


const routes: Routes = [
  { path: '', component: WorksComponent }
];

@NgModule({
  declarations: [WorksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class WorksModule { }
