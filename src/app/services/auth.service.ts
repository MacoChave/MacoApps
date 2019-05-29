import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  
  constructor(private mAuth: AngularFireAuth, private router: Router) {
    this.setUp()
  }
  
  login(mail: string, pass: string){
    try {
      this.mAuth.auth.signInWithEmailAndPassword(mail, pass);
      this.next();
    } catch (e) {
      alert(`¡Error! ${e.message}`);
    }
  }

  logout() {
    if (this.verifySession()) {
      this.mAuth.auth.signOut();
      localStorage.removeItem('user');
      this.back();
    }
  }

  verifySession() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }

  setUp() {
    this.mAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        return true;
      } else {
        localStorage.setItem('user', null);
        return false;
      }
    })
  }

  next() {
    this.router.navigate(['app-admin']);
  }

  back() {
    this.router.navigate(['app-signin']);
  }
}
