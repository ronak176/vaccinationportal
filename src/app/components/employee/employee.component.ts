import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Employee } from 'src/app/shared/interfaces/employee/employee';
import { userDetails } from 'src/app/shared/interfaces/user/userDetails';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee : Employee;
  list : Employee[];
  userD : userDetails;
  currentUser : userDetails
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private af : AngularFireStorage, private breakpointObserver: BreakpointObserver, public authService: AuthService,
    public router: Router,
    public ngZone: NgZone, private service : EmployeeService, private firestore : AngularFirestore, private afAuth: AngularFireAuth) { }

    cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return {
            columns: 1,
            miniCard: { cols: 1, rows: 1 },
            chart: { cols: 1, rows: 5 },
            table: { cols: 1, rows: 4 },
          };
        }
  
        return {
          columns: 4,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 3, rows: 2 },
          table: { cols: 1, rows: 2 },
        };
      })
    );

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.firestore.doc(`usersData/${user.uid}`).valueChanges().subscribe(res => {
        this.currentUser = res
      })
    })
  }

}
