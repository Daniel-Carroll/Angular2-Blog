import { Component } from '@angular/core';
import {ArticleService} from '../shared/services/articles/articles.service'

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  providers: [ArticleService],
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  article: any;

  constructor(private articleService: ArticleService){}

  

  postArticle(){
    this.articleService.postArticle(this.article);
  }

}