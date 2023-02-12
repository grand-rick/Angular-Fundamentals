import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { DirectoriesComponent } from './directories/directories.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: DirectoriesComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'user', component: UserComponent},
  {path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
