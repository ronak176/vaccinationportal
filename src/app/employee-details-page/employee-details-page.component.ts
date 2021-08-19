import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { EmployeeService } from '../shared/services/employee/employee.service';
import { MatGridList } from '@angular/material/grid-list';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../shared/interfaces/employee/employee';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';
import { AngularFireStorage } from '@angular/fire/storage';

export interface GridColumns {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

@Component({
  selector: 'app-employee-details-page',
  templateUrl: './employee-details-page.component.html',
  styleUrls: ['./employee-details-page.component.css'],
})
export class EmployeeDetailsPageComponent implements OnInit{
  employee : Employee;
  id : string;
  public constructor(private af : AngularFireStorage,private breakpointObserver: BreakpointObserver, private route : ActivatedRoute,private service : EmployeeService, private firestore : AngularFirestore) {}
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
        chart: { cols: 3, rows: 3 },
        table: { cols: 1, rows: 3 },
      };
    })
  );

  ngOnInit(){
    this.route.params.subscribe(params => this.id = params.id );
    this.firestore.collection('employees').doc(this.id).valueChanges().subscribe(res => {
      this.employee = res;
    })
  }

  getAge(dob : string) : number{
    var dateMomentObject = moment(dob, "DD/MM/YYYY")
    var dateObject = dateMomentObject.toDate()
    var years = moment().diff(dateObject, 'years', false)
    return years
  }

  firstDoseCertificate(){
    const ref = this.af.ref(`${'/firstDoseCertificates'}/${this.employee.name}`)
    ref.getDownloadURL().subscribe(res => {
      window.open(res)
    })
  }

  secondDoseCertificate(){
    const ref = this.af.ref(`${'/secondDoseCertificates'}/${this.employee.name}`)
    ref.getDownloadURL().subscribe(res => {
      window.open(res)
    })
  }

  negativeTestCertificate(){
    const ref = this.af.ref(`${'/negativeReports'}/${this.employee.name}`)
    ref.getDownloadURL().subscribe(res => {
      window.open(res)
    })
  }
}
