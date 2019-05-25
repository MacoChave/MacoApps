import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  
  post: Post;

  constructor(private postService:PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let collection = this.route.snapshot.paramMap.get('category');
    let id = this.route.snapshot.paramMap.get('id');

    this.postService.getPost(collection, id).subscribe(data => {
      this.post = data;
    })
  }
}
