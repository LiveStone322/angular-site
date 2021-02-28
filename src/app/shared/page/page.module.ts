import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { DropdownButtonModule } from '../dropdown-button/dropdown-button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    DropdownButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PageComponent]
})
export class PageModule { }
