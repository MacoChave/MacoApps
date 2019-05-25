import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  @Input() title: string = "List Posts";
  posts: Post[];

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postService.getPosts(this.title).subscribe(data => {
      this.posts = data;
    });
  }

  sendPost(post: Post) {
    this.router.navigate(['/app-view-post', {category: this.title, id: post.id}]);
  }
}
