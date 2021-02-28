import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DimImageComponent } from './components/dim-image/dim-image.component';
import { LanguagedTextModule } from 'src/app/shared/languaged-text/languaged-text.module';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, DimImageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LanguagedTextModule
  ]
})
export class HomeModule { }
