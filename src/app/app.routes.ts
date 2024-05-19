import { Routes } from '@angular/router';
import { LibroInsertarComponent } from './libro-insertar/libro-insertar.component';
import { LibroConsultarComponent } from './libro-consultar/libro-consultar.component';

export const routes: Routes = [
    {path: 'insertar', component:LibroInsertarComponent},
    {path: 'consultar', component:LibroConsultarComponent}
];
