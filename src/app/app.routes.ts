import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    loadComponent:()=>import('./about/about.component').then(mod=> mod.AboutComponent)
  },
  {
    path:'contact',
    loadChildren:()=>import('./contact/contact.routes').then(mod=>mod.contactRoutes),
  }
];
