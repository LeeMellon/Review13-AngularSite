import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Article } from '../models/article.model';





@Injectable()
export class DatabaseService {
articles: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticles(){
    return this.articles
  }

  addArticle(newArticle: Article){
    this.articles.push(newArticle);
  }

  getArticleByKey(key: string){
    return this.database.object('articles/' + key);
  }

  updateArticle(updatedArticle){
    let archivedArticle = this.getArticleByKey(updatedArticle.$key);
    archivedArticle.update(
      {title: updatedArticle.title,
      author: updatedArticle.author,
      blurb: updatedArticle.blurb,
      body: updatedArticle.body,
      img: updatedArticle.img,
      alt: updatedArticle.alt})
  }

  deletArticle(articleToDelete){
    let archivedArticle = this.getArticleByKey(articleToDelete.$key);
    archivedArticle.remove();
  }

}
