import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user/user';
import { userDetails } from '../interfaces/user/userDetails';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  userData : User
  userDetails : userDetails
  answer : boolean

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public router: Router
  ){ }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.afAuth.authState.subscribe({
        next : (user => {
          if (user) {
            this.userData = user;
            this.afs.doc(`usersData/${this.userData.uid}`).valueChanges().subscribe(res => {
              this.userDetails = res;
              if(res['admin'] === true){
                this.answer =true
              }else{
                this.answer = false
              }})
            } 
        })
   })

    return this.answer
    

  }
  
}
    //   if(this.authService.userDetails?.admin !== true){
    //     return false;
    //   }
    // return true;
