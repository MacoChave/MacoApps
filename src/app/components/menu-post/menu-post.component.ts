import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Category } from 'src/app/models/catagory';
import { CategoryService } from 'src/app/services/category.service';
import 'hammerjs';

@Component({
  selector: 'app-menu-post',
  templateUrl: './menu-post.component.html',
  styleUrls: ['./menu-post.component.css']
})
export class MenuPostComponent implements OnInit {

  background = 'primary';

  categories: Category[];

  constructor(private db: CategoryService) { }

  ngOnInit() {
    this.db.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

}
