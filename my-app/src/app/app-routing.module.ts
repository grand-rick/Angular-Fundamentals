import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { DirectoryComponent } from './directories/directories.component';

const routes: Routes = [
  {path: '', component: DirectoryComponent},
  {path: 'bookmarks', component: BookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
