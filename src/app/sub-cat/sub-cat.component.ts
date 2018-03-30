import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.component.html',
  styleUrls: ['./sub-cat.component.css']
})
export class SubCatComponent {
  @Input() subList: Article[];
  constructor() { }


}
