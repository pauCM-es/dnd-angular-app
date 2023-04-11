import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpedicionComponent } from './camaras/expedicion/expedicion.component';
import { HomeComponent } from './camaras/home/home.component';
import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './shared/components/partials.module';


@NgModule({
  declarations: [
    AppComponent,
    ExpedicionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PartialsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
