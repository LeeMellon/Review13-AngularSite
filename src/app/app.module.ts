import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { EditArticleComponent } from './edit-article/edit-article.component';


@NgModule({
  declarations: [
    AppComponent,
    NewArticleComponent,
    SubCatComponent,
    ArticleEditComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
