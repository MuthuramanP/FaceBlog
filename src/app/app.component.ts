import { Component } from '@angular/core';
import { AuthService } from "./_services/authservice"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FaceBlog';
  myOutput = "";

  objDataMain: Object = [
    {
      "_id": "5c5e74845eebbda0d1f18837",
      "title": "Cruz",
      "description": "SOLGAN",
      "image": "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "_id": "5c5e74849a8cb533006d3343",
      "title": "Lester",
      "description": "CYTREK",
      "image": "https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "_id": "5c5e7484e166b65e041b1f26",
      "title": "Chen",
      "description": "TALKALOT",
      "image": "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "_id": "5c5e7484971949b143e4f45b",
      "title": "Kent",
      "description": "ZORROMOP",
      "image": "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "_id": "5c5e748474900bc592641e54",
      "title": "Jasmine",
      "description": "REMOLD",
      "image": "https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ]

  GetOutputData(ev) {
    console.log(ev + " by Muthu");
    this.myOutput = ev + " by Muthu";
  }
  constructor(public objService: AuthService) {

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
  // CallNav(argVal)
  // {
  //   if(argVal=="signin")
  //   {
  //     this.navVal = "Signin";
  //   }
  //   else if(argVal == "signup")
  //   {
  //     this.navVal = "Signup";
  //   }
  // }
}