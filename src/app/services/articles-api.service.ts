import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_KEY } from '../api-keys';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Article } from '../models/article.model';
import { DatabsService } from '../services/database.service';



@Injectable()
export class ArticlesApiService {
articlesList;
  constructor(private http: Http) { }


  getByCurrentBusiness(){
  return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=46e948f124ce44f3b3aca4e979f7d2bb`)
  }

}
