import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {BlogPostService} from '../shared/services/blog-post/blog-post.service'

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  providers: [BlogPostService],
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  blogPosts:any[];

  constructor(private blogService: BlogPostService,
              private router: Router){}

  ngOnInit(){
    this.getBlogPosts();
  }

  onSelect(postId){
      this.router.navigate(['/post', postId])
  }

  getBlogPosts(){
    this.dataLoading = true;
    this.blogService.getBlogPosts()
            .subscribe(
              data => {
                this.blogPosts = data
                this.dataLoading=false;
                console.log(this.blogPosts)
              },
              error =>  {
                this.errorMessage = <any>error;
                this.dataLoading = false;
              }
            )
  }

}