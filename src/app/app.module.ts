import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { MiddlePanelComponent } from './middle-panel/middle-panel.component';
import { ImageComponent } from './middle-panel/postcard/image/image.component';
import { TextComponent } from './middle-panel/postcard/text/text.component';
import { QuestComponent } from './middle-panel/postcard/quest/quest.component';
import { PostcardComponent } from './middle-panel/postcard/postcard.component';
import { CommentsComponent } from './middle-panel/postcard/comments/comments.component';
import { ProfileComponent } from './middle-panel/postcard/profile/profile.component';
import { LikesComponent } from './middle-panel/postcard/likes/likes.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { PostComponent } from './post/post.component';
import { PostCardService } from './_services/postcardservice';
import { AuthService } from './_services/authservice';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    RightPanelComponent,
    MiddlePanelComponent,
    ImageComponent,
    TextComponent,
    QuestComponent,
    PostcardComponent,
    CommentsComponent,
    ProfileComponent,
    LikesComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostCardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
