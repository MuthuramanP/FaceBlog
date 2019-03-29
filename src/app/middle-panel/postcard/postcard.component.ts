import { Component, OnInit } from '@angular/core';
import { PostCardService } from '../../_services/postcardservice';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

  objDataMiddle: object;

  constructor(objService: PostCardService) {
    this.objDataMiddle = objService.allPostCard;
  }

  ngOnInit() {
  }

}
