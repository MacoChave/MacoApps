import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MenuPostComponent } from './components/menu-post/menu-post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/app-menu-post',
    pathMatch: 'full'
  },
  {
    path: 'app-menu-post',
    component: MenuPostComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
