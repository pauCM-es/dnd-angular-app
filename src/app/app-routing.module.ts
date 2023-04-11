import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpedicionComponent } from './camaras/expedicion/expedicion.component';
import { HomeComponent } from './camaras/home/home.component';

const routes: Routes = [
  {
    path: "camaras", component: HomeComponent
  },
  {
    path: "camaras/expedicion", component: ExpedicionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
