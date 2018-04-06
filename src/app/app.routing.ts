import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesApiService } from './services/articles-api.service';

const appRoutes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },



];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
