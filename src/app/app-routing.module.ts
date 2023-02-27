import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
import { MemoriesComponent } from './components/memories/memories.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Education',component:EducationComponent},
  {path:'Hobbies',component:HobbiesComponent},
  {path:'Memories',component:MemoriesComponent},
  {path:'Profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
