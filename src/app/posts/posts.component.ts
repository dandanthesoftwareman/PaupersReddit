import { Component, OnInit } from '@angular/core';
import { RedditApiService } from '../reddit-api.service';
import { Reddit } from '../Reddit';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Reddit = {} as Reddit;
  constructor(private redditApiService:RedditApiService) { }

  ngOnInit(): void {
    this.redditApiService.getRedditApi().subscribe((response:Reddit) => {
      this.posts= response;})
  }

}
