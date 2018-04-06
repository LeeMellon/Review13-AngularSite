import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Article } from '../models/article.model';
import { HttpModule } from '@angular/http';
import { ArticlesApiService } from '../services/articles-api.service';
import { Router } from '@angular/router';
// import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ArticlesApiService]
})
export class MainPageComponent implements OnInit {
articlesList;
  constructor(private router: Router, private articleApiService: ArticlesApiService) { }

  ngOnInit() {

  }

  business(){
    this.articlesList = this.articleApiService.getByCurrentBusiness()


}
}  
