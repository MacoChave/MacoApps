import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { MenuPostComponent } from './components/menu-post/menu-post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { SigninComponent } from './components/signin/signin.component';

import { AngularModule } from './material.module';
import { FirestoreModule } from './firestore.module';

@NgModule({
  declarations: [
    AppComponent,
    FormPostComponent,
    ViewPostComponent,
    ListPostsComponent,
    MenuPostComponent,
    PageNotFoundComponent,
    AdminComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularModule,
    AngularFireModule.initializeApp(environment.firebase, 'maco-app'),
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
