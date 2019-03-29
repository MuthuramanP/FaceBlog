import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../_services/authservice"
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  myValue:string = "Hope Tutor";
  
  constructor(public objService: AuthService) { }

  ngOnInit() {
  }
  onHome()
  {
    this.objService.allNav = 0;
  }
  onSignIn() {
    this.objService.allNav = 1;
  }
  onSignUp() {
    this.objService.allNav = 2;
  }
}
