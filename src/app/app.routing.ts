import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesApiService } from './services/articles-api.service';
import { NewArticleComponent } from './new-article/new-article.component';
const appRoutes: Routes = [
  {
    path:'',
    component: NewArticleComponent
  },
  // {
  //   path:'new-article',
  //   component: NewArticleComponent
  // }


];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
