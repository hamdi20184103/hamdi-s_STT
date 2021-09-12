import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { CareerComponent } from './career/career.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path: '',component : HomeComponent},
  {path: 'career', component : CareerComponent},
  {path: 'about', component : AboutComponent},
  {path : 'education', component : EducationComponent},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
