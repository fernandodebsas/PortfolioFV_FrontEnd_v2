import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loginborrar1Component } from './componentes/loginborrar1/loginborrar1.component';

const routes: Routes = [
  { path: 'login', component: Loginborrar1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
