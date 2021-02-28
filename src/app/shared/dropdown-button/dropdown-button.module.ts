import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownButtonComponent } from './dropdown-button.component';
import { LanguagedTextModule } from '../languaged-text/languaged-text.module';

@NgModule({
  declarations: [DropdownButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [DropdownButtonComponent]
})
export class DropdownButtonModule { }
