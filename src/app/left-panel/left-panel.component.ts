import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  myValue:string = "Hope Tutor";
  
  constructor() { }

  ngOnInit() {
  }

}
