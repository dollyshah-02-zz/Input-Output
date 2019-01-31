import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOutputComponent } from './child-output/child-output.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChildOutputComponent, ParentOutputComponent],
  exports:[ChildOutputComponent,ParentOutputComponent]
})
export class OutputModule { }
