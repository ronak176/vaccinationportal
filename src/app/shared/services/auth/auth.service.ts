import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../interfaces/user/user';
import { of } from 'rxjs';
import { userDetails } from '../../interfaces/user/userDetails';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: User; // Save logged in user data
  auth = firebase.default.auth;
  userDat : Observable<User>;
  userDetails : userDetails;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */

    this.userDat = this.afAuth.authState.pipe(switchMap(user => {
      if(user){
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      }else{
        return of(null);
      }
    }))
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.afs.doc(`usersData/${this.userData.uid}`).valueChanges().subscribe(res => {
          this.userDetails = res;
          if(res['admin'] === true){
            // this.router.navigate(['/nav/dashboard']);
            this.router.navigate(['/admin/dashboard'])
            // console.log(localStorage.getItem('user'))
          }else{
            // this.router.navigate(['/nav']);
            this.router.navigate(['/employee/homepage'])
          }
        })

        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
    })
  }

  // Sign in with email/password
  async SignIn(email, password) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
          // console.log(result.user);
          this.afs.doc(`usersData/${result.user.uid}`).valueChanges().subscribe(res => {
            this.userDetails = res;
            if(res['admin'] === true){
              // this.router.navigate(['/nav/dashboard']);
              this.router.navigate(['/admin/dashboard'])
              setTimeout(()=> window.location.reload(), 3000)
            }else{
              // this.router.navigate(['/nav']);
            this.router.navigate(['/employee/homepage'])
            }
          })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Auth logic to run auth providers
  async AuthLogin(provider) {
    await this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.SetUserData(result.user);
      setTimeout(() => {
        this.afs.doc(`usersData/${result.user.uid}`).valueChanges().subscribe(res => {
          this.userDetails = res;
          if(res['admin'] === true){
            // this.router.navigate(['/nav/dashboard']);
            this.router.navigate(['/admin/dashboard'])
            setTimeout(()=> window.location.reload(), 3000)
          }else{
            // this.router.navigate(['/nav']);
            this.router.navigate(['/employee/homepage'])
          }
        })
      }, 5000)
      
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    user.updateProfile({
    //   displayName : "Ronak"
        emailVerified : true
    })
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const nameRef : AngularFirestoreDocument<any> = this.afs.doc(`usersData/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    }
    return userRef.set(userData, {
      merge: true
    })

  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.userDetails = null;
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}