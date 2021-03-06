import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Article } from '../models/article.model';





@Injectable()
export class DatabaseService {
articles: FirebaseListObservable<any[]>;
article: FirebaseObjectObservable<any>;
  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
    this.article = database.object('articles'[0]);
  }

  getArticles(){
    return this.articles
  }

  getArticle(){
    return this.article
  }

  addArticle(newArticle: Article){
    this.articles.push(newArticle);
  }

  getArticleByKey(key: string){
    return this.database.object('articles/' + key);
  }

  editArticle(updatedArticle){
    let archivedArticle = this.getArticleByKey(updatedArticle.$key);
    archivedArticle.update(
      {title: updatedArticle.title,
      author: updatedArticle.author,
      blurb: updatedArticle.blurb,
      body: updatedArticle.body,
      img: updatedArticle.img,
      alt: updatedArticle.alt,
      key: updatedArticle.$key
    })
  }

  deletArticle(articleToDelete){
    let archivedArticle = this.getArticleByKey(articleToDelete.$key);
    archivedArticle.remove();
  }

}
