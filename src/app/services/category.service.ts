import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/catagory';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Observable<Category[]>;
  categoryDoc: AngularFirestoreDocument<Category>;
  categoryCollection: AngularFirestoreCollection<Category>;
  private collection: string = 'Categories';

  constructor(private db: AngularFirestore) { }

  getCategory(id: string) {
    this.categoryDoc = this.db.doc<Category>(`Categories/${id}`);
    return this.categoryDoc.valueChanges();
  }

  getCategories() {
    this.categoryCollection = this.db.collection<Category>(this.collection);
    this.categories = this.categoryCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Category;
          data.id = action.payload.doc.id;
          return data;
        })
      })
    )
    return this.categories;
  }

  addCategory(category: Category) {
    this.categoryCollection.add(category);
  }

  updateCategory(category: Category) {
    this.categoryDoc = this.db.doc(`${this.collection}/${category.id}`);
    this.categoryDoc.update(category);
  }

  deleteCategory(category: Category) {
    this.categoryDoc = this.db.doc(`${this.collection}/${category.id}`);
    this.categoryDoc.delete();
  }
}
