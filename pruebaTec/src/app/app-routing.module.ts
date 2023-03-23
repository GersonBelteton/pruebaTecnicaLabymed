import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/components/inicio/inicio.component'
import {DescripcionComponent} from '../app/components/descripcion/descripcion.component'
const routes: Routes = [

  {
    path: '',
    component: InicioComponent
  },
  {
    path:'descripcion',
    component:DescripcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
