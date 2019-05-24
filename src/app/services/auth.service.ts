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
      this.router.navigate(['app-admin']);
    } catch (e) {
      alert(`¡Error! ${e.message}`);
    }
  }

  logout() {
    this.mAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['app-signin']);
  }

  verifySession() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
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
}
