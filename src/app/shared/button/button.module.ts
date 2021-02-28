import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { LanguagedTextModule } from '../languaged-text/languaged-text.module';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    LanguagedTextModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
