import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';
import * as $ from 'jquery'
import { ArticlesApiService } from '../services/articles-api.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { FirebaseObjectObservable,  } from 'angularfire2/database';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  providers: [ArticlesApiService, DatabaseService]
})
export class NewArticleComponent {

  articlesList: any[]=null;
  constructor(private router: Router, private articleApiService: ArticlesApiService, private databaseService: DatabaseService) { }


  create(title: string, author: string, blurb: string, body: string, img: string, alt: string){
    let newArticle = new Article(title, author, blurb, body, img, alt);
    this.databaseService.addArticle(newArticle);
    $(".new-article-container").fadeOut(300,"swing");
  }

  showNew(){
    $(".new-article-container").toggle(300, "swing");
  }

  showSide(){
    $(".side-menu-container").toggle(300, "swing");
  }

  }
