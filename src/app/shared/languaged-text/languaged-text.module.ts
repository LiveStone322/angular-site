import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagedTextComponent } from './languaged-text.component';

@NgModule({
  declarations: [LanguagedTextComponent],
  imports: [
    CommonModule
  ],
  exports: [LanguagedTextComponent]
})
export class LanguagedTextModule { }
