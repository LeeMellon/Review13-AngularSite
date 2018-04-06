import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
// import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css'],
  providers: [DatabaseService]
})
export class DisplayArticleComponent implements OnInit {
articleToDisplay: Article;
articleKey: string;
  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private database: DatabaseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
    this.articleKey = urlParameters['key'];
  });

    this.database.getArticleByKey(this.articleKey).subscribe(article=>{
      this.articleToDisplay = article;
    })
  }

}
