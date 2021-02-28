import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './links.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { LanguagedTextModule } from 'src/app/shared/languaged-text/languaged-text.module';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: LinksComponent }
];

@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    LanguagedTextModule,
    FormsModule
  ]
})
export class LinksModule { }
