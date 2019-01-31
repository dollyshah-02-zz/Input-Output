import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {
  showMessage: string;

  constructor() { }
  ngOnInit() {
  }
  getData(){
    this.showMessage="Data from child"
  }


}
