import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {BlogPostService} from '../../shared/services/blog-post/blog-post.service'

@Component({
  selector: 'blog-details',
  templateUrl: './blog-post-details.component.html',
  providers: [BlogPostService],
  styleUrls: ['./blog-post-details.component.css']
})
export class BlogDetailsComponent implements OnInit{
  dataLoading:boolean;
  postId: string;  
  errorMessage: string;
  blogPost:any;

  constructor(private blogService: BlogPostService,
               route: ActivatedRoute ){
                   //the defacto way to retrive a parameter from a route
                   this.postId = route.snapshot.params['id']
               }

  ngOnInit(){
    this.getBlogPostById();
  }

  getBlogPostById(){
    this.dataLoading = true;
    this.blogService.getBlogPostById(this.postId)
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