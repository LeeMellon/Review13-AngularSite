import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCatComponent } from './sub-cat/sub-cat.component';

const appRoutes: Routes = [
  {
    path:'subcat',
    component: SubCatComponent
  }


];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
