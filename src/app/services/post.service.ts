import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;
  postCollection: AngularFirestoreCollection<Post>;

  constructor(private db: AngularFirestore) { }

  getPost(title: string, id: string) {
    this.postDoc = this.db.doc<Post>(`${title}/${id}`);
    return this.postDoc.valueChanges();
  }

  getPosts(title: string) {
    this.postCollection = this.db.collection<Post>(title);
    this.posts = this.postCollection.valueChanges();
    return this.posts;
  }

  updatePost(post: Post) {
    this.postDoc.update(post);
  }

  addPost(post: Post) {
    this.postCollection.add(post);
  }
}
