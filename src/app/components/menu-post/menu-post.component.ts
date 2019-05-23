import { Component, OnInit, Input } from '@angular/core';
import 'hammerjs';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-menu-post',
  templateUrl: './menu-post.component.html',
  styleUrls: ['./menu-post.component.css']
})
export class MenuPostComponent implements OnInit {

  background = 'primary';

  public titles: string[] = [
    'Windows',
    'Android',
    'C/C++',
    'Web'
  ]
  constructor() { }

  ngOnInit() {  }

}
