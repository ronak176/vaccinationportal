import { Component, NgZone, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from 'src/app/shared/interfaces/employee/employee';
import { userDetails } from 'src/app/shared/interfaces/user/userDetails';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit{
  list : Employee[];
  userD : userDetails;
  currentUser : userDetails
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

    ngOnInit(){
      // this.service.getEmployees().subscribe(actionsArray => {
      //   this.list = actionsArray.map(item => 
      //     {
      //       return {
      //         id: item.payload.doc.id,
      //         ...item.payload.doc.data
      //       } as Employee;
      //     })
      //     });

      this.afAuth.authState.subscribe(user => {
        this.firestore.doc(`usersData/${user.uid}`).valueChanges().subscribe(res => {
          this.currentUser = res
        })
      })
      }


  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService,
    public router: Router,
    public ngZone: NgZone, private service : EmployeeService, private firestore : AngularFirestore, private afAuth: AngularFireAuth) {
    }


}
