import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;
  postCollection: AngularFirestoreCollection<Post>;

  constructor(private db: AngularFirestore) { }

  getPost(collection: string, id: string) {
    this.postDoc = this.db.doc<Post>(`${collection}/${id}`);
    return this.postDoc.valueChanges();
  }

  getPosts(collection: string) {
    this.postCollection = this.db.collection<Post>(collection);
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Post;
          data.id = action.payload.doc.id;
          return data;
        })
      })
    );
    return this.posts;
  }

  updatePost(collection: string, post: Post) {
    this.postDoc = this.db.doc(`${collection}/${post.id}`);
    this.postDoc.update(post);
  }

  addPost(collection: string, post: Post) {
    this.postCollection.add(post);
  }

  deletePost(collection: string, post: Post) {
    this.postDoc = this.db.doc(`${collection}/${post.id}`);
    this.postDoc.delete();
  }
}
