import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {ArticleService} from '../../shared/services/articles/articles.service'

@Component({
  selector: 'blog-details',
  templateUrl: './blog-post-details.component.html',
  providers: [ArticleService],
  styleUrls: ['./blog-post-details.component.css']
})
export class BlogDetailsComponent implements OnInit{
  dataLoading:boolean;
  postId: string;  
  errorMessage: string;
  blogPost:any;

  constructor(private articleService: ArticleService,
               route: ActivatedRoute ){
                   //the defacto way to retrive a parameter from a route
                   this.postId = route.snapshot.params['id']
               }

  ngOnInit(){
    this.getBlogPostById();
  }

  getBlogPostById(){
    this.dataLoading = true;
    this.articleService.getArticlesById(this.postId)
            .subscribe(
              data => {
                this.blogPost = data
                this.dataLoading = false;
              },
              error => {
                this.errorMessage = <any>error
                 this.dataLoading = false;
              }
            )
  }

}