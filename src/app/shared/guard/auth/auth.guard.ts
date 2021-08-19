import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user/user';
import { userDetails } from '../../interfaces/user/userDetails';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  userData : User
  userDetails : userDetails
  answer : boolean
  
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public router: Router
  ){ }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     this.afAuth.authState.subscribe({
  //       next : (user => {
  //         if (user) {
  //           this.userData = user;
  //           this.afs.doc(`usersData/${this.userData.uid}`).valueChanges().subscribe(res => {
  //             this.userDetails = res;
  //             if(res['admin'] === false){
  //               this.answer =true
  //             }else{
  //               this.answer = false
  //             }})
  //           } 
  //       })
  //  })

  //   return this.answer
    

  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['login'])
    }
    return true;
  }

canActivateChild(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if (!this.authService.userDetails?.admin) {
    return false;
}
return true;
}

}