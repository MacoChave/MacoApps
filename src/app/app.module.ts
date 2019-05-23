import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { MenuPostComponent } from './components/menu-post/menu-post.component';

import { AngularModule } from './material.module';
import { FirestoreModule } from './firestore.module';

@NgModule({
  declarations: [
    AppComponent,
    FormPostComponent,
    ViewPostComponent,
    ListPostsComponent,
    MenuPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularModule,
    AngularFireModule.initializeApp(environment.firebase, 'maco-app'),
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
