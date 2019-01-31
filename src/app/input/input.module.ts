import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChildComponent, ParentComponent],
  exports:[ChildComponent,ParentComponent]
})
export class InputModule { }
