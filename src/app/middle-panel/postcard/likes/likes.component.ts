import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../_services/authservice';
import { PostCardService } from 'src/app/_services/postcardservice';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})

export class LikesComponent implements OnInit {
  @Input() objLikes;
  //iLike: number = 0;
  @Input() myIndex;

  constructor(public objauthService: AuthService, public objpostCard: PostCardService) {
    //console.log(objauthService.userData);  

  }

  ngOnInit() {
  }

  onAddLikes() {
    //console.log(this.objpostCard.allPostCard[0].like.count);
    //this.iLike = this.iLike + 1;
    //this.objLikes.count += 1;
    //this.objpostCard.allPostCard[0].like.count += 1;
    //let index = this.objLikes.findIndex( record => record.id === id );
    this.objpostCard.allPostCard[this.myIndex].like.count += 1;
    this.objpostCard.allPostCard[this.myIndex].like.data.push(this.objauthService.userData);
  }


}
