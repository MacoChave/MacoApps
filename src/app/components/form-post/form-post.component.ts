import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Category } from 'src/app/models/catagory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  post = {} as Post;
  selected: string;
  categories: Category[];

  constructor(private postService: PostService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  addPost() {
    this.post.date_publish = Date.now();
    this.postService.addPost(this.selected, this.post);
    this.post = {};
  }
}
