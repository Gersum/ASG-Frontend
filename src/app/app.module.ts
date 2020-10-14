import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';







@NgModule({
  declarations: [
    AppComponent,
   
    
   
   
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    RouterModule,
    
    //MatCarouselModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
