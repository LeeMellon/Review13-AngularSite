import { Component } from '@angular/core';
import { Article } from './models/article.model';
import { ApiCall } from './models/apiCall.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bustle-Clone';
  masterArticlesList: Article[]=[
    new Article("Things Happen, People Freakout!", "J Nobody", "When crazy stuff goes down in hometown America, can Hometown-Americans respond rationaly?", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbGgJcq99e1gywfim6rl4gH6dNargpeVmMa7JvLdn5MZ8qe6v", "pictures of a bug", 1),
    new Article("Things Happen, People Freakout Somewhere Else!", "I Somebody II", "When crazy stuff goes down outside hometown America, can Hometown-Americans at least respond rationaly to that?", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngkWr7zCR7RjE9Oh9rlIXQOJCFpVrsDssQgRVQfhkRTadqvryfg", "wpman making a funny face", 2),
    new Article("Importatnt Things Happen, No one seems to care", "Who Cares esq.", "When important things actully do happen, who can be trusted to actully care?", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9Eqax-Y38chcqn3HxwXVwigYXoNwAcvbxias-8NoukOSooRNug", "Spongebob, becuse...yeah!", 3),
  ]


  newArticle(newArticle){
    this.masterArticlesList.push(newArticle); //ToDo: how to push to DB
  }
}
