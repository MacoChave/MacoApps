import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MenuPostComponent } from './components/menu-post/menu-post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { SigninComponent } from './components/signin/signin.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/app-menu-post',
    pathMatch: 'full'
  },
  {
    path: 'app-menu-post',
    component: MenuPostComponent
  },
  {
    path: 'app-signin',
    component: SigninComponent
  },
  {
    path: 'app-admin',
    component: AdminComponent
  },
  {
    path: 'app-view-post',
    component: ViewPostComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
