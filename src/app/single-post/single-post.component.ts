import { Component, Input, OnInit } from '@angular/core';
import { RedditApiService } from '../reddit-api.service';
import { Child } from '../Reddit';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input()post:Child = {} as Child;
  constructor() { }

  ngOnInit(): void {
  }

}
