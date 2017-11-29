import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.Component'
import {AboutComponent} from './about/about.Component'
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing ], //other modules the app depends on
  declarations: [AppComponent,HomeComponent,AboutComponent], // declare all derectives and components
  bootstrap : [AppComponent] // root component to bootstarp
})
export class AppModule { }