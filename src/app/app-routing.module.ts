import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages/pages.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  {path:'pages',component:PagesComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'ourservices',component:OurservicesComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[],
})
export class AppRoutingModule { }
