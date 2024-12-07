import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages/pages.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagesComponent,
    AboutusComponent,
    OurservicesComponent,
    
    ServicesComponent,
        TestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
