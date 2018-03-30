import { Component } from '@angular/core';
import { Article } from './models/article.model';
import { ApiCall } from './models/apiCall.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bustle-Clone';


  newArticle(newArticle){
    this.masterArticlesList.push(newArticle); //ToDo: how to push to DB
  }
}
