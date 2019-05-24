import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

export interface Category {
  value?: string,
  viewValue?: string
}

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  post = {} as Post;
  selected: string;
  categories: Category[] = [
    {value: 'Windows', viewValue: 'Windows'},
    {value: 'Android', viewValue: 'Android'},
    {value: 'C/C++', viewValue: 'C/C++'},
    {value: 'Web', viewValue: 'Web'},
  ]

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts('Windows');
  }

  addPost() {
    this.postService.addPost(this.selected, this.post);
    this.post = {};
  }
}
