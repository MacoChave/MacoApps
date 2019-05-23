import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  @Input() title: string = "List Posts";
  posts:Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts(this.title).subscribe(data => {
      this.posts = data;
    });
  }

}
