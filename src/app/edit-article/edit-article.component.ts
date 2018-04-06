import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';




@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [DatabaseService]
})
export class EditArticleComponent {
  articleKey: string;
  articleToEdit: Article;

  constructor(private route: ActivatedRoute, private Location: Location, private databaseService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.articleKey = urlParameters['key'];
      console.log(this.articleKey)
    });

    this.databaseService.getArticleByKey(this.articleKey).subscribe(article=>{
      console.log(article)
      this.articleToEdit = article;
    })
}
  callToEdit(articleToEdit){
    this.databaseService.editArticle(articleToEdit)
  }

  callToDelete(articleToDelete){
    if(confirm("Are you really really TOTES fur sursies?")){
      this.databaseService.deletArticle(articleToDelete);
    }
  }


}
