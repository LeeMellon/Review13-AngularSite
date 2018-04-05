import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_KEY } from '../api-keys';

@Injectable()
export class ArticlesApiService {

  constructor(private http: Http) { }


  getByCurrentBusiness(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY`)
  }
}
