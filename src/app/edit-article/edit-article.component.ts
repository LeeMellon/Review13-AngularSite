import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
  @Input() editArticle: Article;
  @Output() clickDone = new EventEmitter();


  finishEdit(){
    this.clickDone.emit()
  }

  constructor() { }


}
