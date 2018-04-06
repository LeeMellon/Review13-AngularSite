import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};



@NgModule({
  declarations: [
    AppComponent,
    NewArticleComponent,
    SubCatComponent,
    EditArticleComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
