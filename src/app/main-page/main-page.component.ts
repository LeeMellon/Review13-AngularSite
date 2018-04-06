import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Article } from '../models/article.model';
import { HttpModule } from '@angular/http';
import { ArticlesApiService } from '../services/articles-api.service';
import { Location } from '@angular/common';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ArticlesApiService, DatabaseService]
})
export class MainPageComponent implements OnInit {
articleTop: FirebaseObjectObservable<Article>;
articlesList: any[];
articleKey: string;
date = Date.now();
  constructor(private router: Router, private articleApiService: ArticlesApiService, private database: DatabaseService) { }

  ngOnInit() {
    this.articleTop = this.database.getArticle();
    console.log(this.articleTop)
    this.database.getArticles().subscribe(articles=>{
      this.articleTop = articles.shift();
      this.articlesList = articles
    })
  }

  editClick(article){
    console.log(article.$key)
    this.router.navigate(['edit', article.$key]);
  }

  business(){
    this.articleApiService.getByCurrentBusiness().subscribe(articles=>{
      this.articlesList = articles.json();
      console.log(this.articlesList)

    })
}
}
