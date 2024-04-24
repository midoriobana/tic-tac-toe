import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageModule } from './core/home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, HomePageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
