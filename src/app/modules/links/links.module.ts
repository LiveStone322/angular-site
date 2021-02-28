import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './links.component';
import { ButtonModule } from 'src/app/shared/button/button.module';


const routes: Routes = [
  { path: '', component: LinksComponent }
];

@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
  ]
})
export class LinksModule { }
