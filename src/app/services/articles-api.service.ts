import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_KEY } from '../api-keys';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Article } from '../models/article.model';




@Injectable()
export class ArticlesApiService {
articlesList;
  constructor(private http: Http) { }


  getByCurrentBusiness(){
this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY`).subscribe(articles=>{
  this.articlesList=articles;
})
console.log(this.articlesList)
  }
}
