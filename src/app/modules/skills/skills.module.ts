import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';


const routes: Routes = [
  { path: '', component: SkillsComponent }
];

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SkillsModule { }
