import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZooComponent } from './zoo/zoo.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  {path: '', component: LinksComponent},
  {path: 'zoo', component: ZooComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
