import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormBigBoxComponent } from './components/form-big-box/form-big-box.component';
import { NewSmallBoxComponent } from './components/new-small-box/new-small-box.component';
import { BoxesInTransitComponent } from './components/boxes-in-transit/boxes-in-transit.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'formBigBox', component: FormBigBoxComponent},
  {path: 'formSmallBox', component: NewSmallBoxComponent},
  {path: 'boxesInTransit', component: BoxesInTransitComponent},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
