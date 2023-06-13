import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewBigBoxComponent } from './components/new-big-box/new-big-box.component';
import { FormBigBoxComponent } from './components/form-big-box/form-big-box.component';
import { NewSmallBoxComponent } from './components/new-small-box/new-small-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewBigBoxComponent,
    FormBigBoxComponent,
    NewSmallBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
