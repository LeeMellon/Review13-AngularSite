import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_KEY, API_KEY2 } from '../api-keys';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Article } from '../models/article.model';
import { DatabaseService } from '../services/database.service';



@Injectable()
export class ArticlesApiService {
  constructor(private http: Http) { }


  getByCurrentBusiness(){
  let apiKey = API_KEY;
  console.log(apiKey);
  return this.http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+apiKey)


  // return this.http.get(`http://webhose.io/filterWebContent?token={"key"}&format=json&ts=1522448853587&sort=crawled&q=site_category%3Aentertainment%20language%3Aenglish`)
  }



}
