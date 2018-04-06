import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';
import * as $ from 'jquery'
import { ArticlesApiService } from '../services/articles-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  providers: [ArticlesApiService]
})
export class NewArticleComponent {
  @Output() createSender = new EventEmitter();
  @Output() listSender = new EventEmitter();
  constructor(private router: Router, private articleApiService: ArticlesApiService) { }
  articlesList;


  create(title: string, author: string, blurb: string, body: string, img: string, alt: string, id: string){
    let newArticle = new Article(title, author, blurb, body, img, alt, parseInt(id));
    this.createSender.emit(newArticle);
    $(".new-article-container").fadeOut(300,"swing");
  }

  showNew(){
    $(".new-article-container").toggle(300, "swing");
  }


  business(){
    this.articleApiService.getByCurrentBusiness().subscribe(articles=>{
      console.log(articles)
      this.articlesList = articles;
      this.listSender.emit(this.articlesList)
    })
  }


}
