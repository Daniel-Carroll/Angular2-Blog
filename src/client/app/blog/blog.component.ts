import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {ArticleService} from '../shared/services/articles/articles.service'

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  providers: [ArticleService],
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  articles:any[];

  constructor(private articleService: ArticleService,
              private router: Router){}

  ngOnInit(){
    this.getArticles();
  }

  onSelect(postId){
      this.router.navigate(['/post', postId])
  }

  getArticles(){
    console.log("Getting articles...")
    this.dataLoading = true;
    this.articleService.getAllArticles()
            .subscribe(
              data => {
                this.articles = data
                this.dataLoading=false;
                console.log(this.articles)
              },
              error =>  {
                this.errorMessage = <any>error;
                this.dataLoading = false;
              }
            )
  }

}