import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.css']
})
export class ParentOutputComponent implements OnInit {
  showMessage: string;

  constructor() { }
  @Output() notify:EventEmitter<any>=new EventEmitter();
  ngOnInit() {
  }
   sendDataToParent() {
    this.notify.emit("Message from Child");
  }
}
