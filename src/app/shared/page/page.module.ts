import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { DropdownButtonModule } from '../dropdown-button/dropdown-button.module';



@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    DropdownButtonModule,
  ],
  exports: [PageComponent]
})
export class PageModule { }
