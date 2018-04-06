import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesApiService } from './services/articles-api.service';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { DisplayArticleComponent } from './display-article/display-article.component';

const appRoutes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path:'edit/:key',
    component: EditArticleComponent
  },
  {
    path:'article/:key',
    component: DisplayArticleComponent
  }


];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
