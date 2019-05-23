import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MenuPostComponent } from './components/menu-post/menu-post.component';

const routes: Routes = [
  {
    path: 'app-menu-post',
    component: MenuPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
