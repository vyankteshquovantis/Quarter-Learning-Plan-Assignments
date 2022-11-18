import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PractiseComponent } from './practise/practise.component';



@NgModule({
  declarations: [PractiseComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[PractiseComponent]
})
export class VankiModule { }
