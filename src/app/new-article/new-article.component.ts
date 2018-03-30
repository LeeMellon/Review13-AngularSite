import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {
  @Output() createSender = new EventEmitter();

  create(title: string, author: string, blurb: string, body: string, img: string, alt: string, id: string){
    let newArticle = new Article(title, author, blurb, body, img, alt, parseInt(id));
    this.createSender.emit(newArticle);
    $(".new-article-container").fadeOut(300,"swing");
  }

  showNew(){
    $(".new-article-container").fadeIn(300, "swing");
  }
  constructor() { }


}
