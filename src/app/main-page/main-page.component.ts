import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Article } from '../models/article.model';
import { HttpModule } from '@angular/http';
import { ArticlesApiService } from '../services/articles-api.service';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ArticlesApiService, DatabaseService]
})
export class MainPageComponent implements OnInit {
articlesList: FirebaseListObservable<any[]>;
articleKey: string;
  constructor(private router: Router, private articleApiService: ArticlesApiService, private database: DatabaseService) { }

  ngOnInit() {
    this.articlesList = this.database.getArticles();
  }

  editClick(article){
    console.log(article.$key)
    this.router.navigate(['edit', article.$key]);
  }

//   business(){
//     this.articlesList = this.articleApiService.getByCurrentBusiness()
//
//
// }
}
