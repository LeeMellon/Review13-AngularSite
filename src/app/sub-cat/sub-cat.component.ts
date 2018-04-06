// import { Component, Input, Output, EventEmitter} from '@angular/core';
// import { Article } from '../models/article.model';
// import { HttpModule } from '@angular/http';
// import { ArticlesApiService } from '../services/articles-api.service';
// import { Router } from '@angular/router';
//
// @Component({
//   selector: 'app-sub-cat',
//   templateUrl: './sub-cat.component.html',
//   styleUrls: ['./sub-cat.component.css'],
//   providers: [ArticlesApiService]
// })
// export class SubCatComponent {
//   @Input() subList: Article[];
//   @Output() editClickSender = new EventEmitter();
//
//
//   constructor(private router: Router, private articleApiService: ArticlesApiService) { }
//
//   editClick(article: Article){
//     this.editClickSender.emit(article)
//   }
//   buisiness(){
//     this.articleApiService.getByCurrentBusiness()
//   }
//
//
//
// }
