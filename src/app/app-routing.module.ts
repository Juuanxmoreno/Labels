import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormBigBoxComponent } from './components/form-big-box/form-big-box.component';
import { NewSmallBoxComponent } from './components/new-small-box/new-small-box.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'formBigBox', component: FormBigBoxComponent},
  {path: 'formSmallBox', component: NewSmallBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
