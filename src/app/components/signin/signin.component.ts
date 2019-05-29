import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  mail: string;
  pass: string;

  constructor(private authService: AuthService) { }

  ngOnInit() { 
    if (this.authService.verifySession())
      this.authService.next();
  }

  login() {
    this.authService.login(this.mail, this.pass);
    this.mail = '';
    this.pass = '';
  }

}
