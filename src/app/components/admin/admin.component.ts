import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Employee } from 'src/app/shared/interfaces/employee/employee';
import { userDetails } from 'src/app/shared/interfaces/user/userDetails';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  list : Employee[];
  userD : userDetails;
  currentUser : userDetails
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService,
    public router: Router,
    public ngZone: NgZone, private service : EmployeeService, private firestore : AngularFirestore, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
