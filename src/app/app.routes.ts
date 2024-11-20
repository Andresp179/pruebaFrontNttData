import { InicioComponent } from './pages/inicio/inicio.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [

    { path: 'inicio', component: InicioComponent },
  { path: 'resumen', component: ResumenComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}