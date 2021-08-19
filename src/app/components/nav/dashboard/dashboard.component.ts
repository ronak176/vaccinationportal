import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { Employee } from 'src/app/shared/interfaces/employee/employee';
import { MatPaginator } from '@angular/material/paginator';
import * as moment from 'moment';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  dataSource = new MatTableDataSource<any>()
  dataSource2 = new MatTableDataSource<any>()
  displayedColumns: string[] = ['empid', 'name', 'age', 'location', 'department', 'firstDose', 'secondDose', 'diagnosed', 'eligible']
  displayedColumns2: string[] = ['empid', 'name', 'age', 'location', 'department', 'firstDose', 'secondDose', 'diagnosed', 'eligible', 'reason']
  departmentFilter : string
  ageFilter : number = null
  vaccinationFilter : string
  diagnosisFilter : string
  eligibleCount = 0
  nonEligibleCount = 0
  pendingResponseCount = 0
  firstDoseCount = 0
  secondDoseCount = 0
  noDoseCount = 0
  testedNegativeCount = 0
  diagnosedCount = 0

cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
   map(({ matches }) => {
     if (matches) {
       return {
         columns: 1,
         miniCard: { cols: 1, rows: 2 },
         chart: { cols: 1, rows: 3 },
         table: { cols: 1, rows: 4 },
       };
     }

    return {
       columns: 3,
       miniCard: { cols: 1, rows: 2 },
       chart: { cols: 2, rows: 3 },
       table: { cols: 3, rows: 3 },
     };
   })
 );

 list : Employee[];
 @ViewChild(MatPaginator) paginator: MatPaginator


  constructor(private afs: AngularFirestore,private breakpointObserver: BreakpointObserver, private service : EmployeeService, public router: Router,
    public ngZone: NgZone, private firestore : AngularFirestore) {}

  ngOnInit(){
    this.dataSource.filterPredicate = this.filterObject

    this.service.getEmployees().subscribe(data => {
      this.list = data;
      // console.log(this.list);
      this.list.forEach(element => {
        var answer : string
        answer = this.getEligibleIn(element)
        if(answer === 'Eligible'){
          this.eligibleCount++
        }else if(answer === undefined){
          this.pendingResponseCount++
        }else{
          this.nonEligibleCount++
        }
        
        if(element.secondDose === 'yesSecond'){
          this.secondDoseCount++
        }else if(element.firstDose === 'yesFirst' && element.secondDose === 'noSecond'){
          this.firstDoseCount++
        }else{
          this.noDoseCount++
        }

        if(element.testedNegative === true){
          this.testedNegativeCount++
        }else if(element.diagnosed === 'yesDiagnosed' && element.testedNegative === false){
          this.diagnosedCount++
        }
      })
      this.service.diagnosedChange(this.diagnosedCount)
      this.service.testedNegativeChange(this.testedNegativeCount)
      this.service.firstDoseChange(this.firstDoseCount)
      this.service.secondDoseChange(this.secondDoseCount)
      this.service.noDoseChange(this.noDoseCount)
      this.service.eligibleChange(this.eligibleCount)
      this.service.nonEligibleChange(this.nonEligibleCount)
      this.service.pendingChange(this.pendingResponseCount)
      this.dataSource.data = this.list;
      this.dataSource.paginator = this.paginator;
      this.dataSource2.data = this.list
      this.dataSource2.paginator = this.paginator
    })
  }



  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  customFilter(){
    let address = this.dataSource[0]
    let firstDose = ""
    let secondDose = ""
    let department = ""
    let answer = ""
    let diagnosed = ""

    // console.log(answer)

    //department
    if(this.departmentFilter === "1"){
      department = "admin"
      answer = answer + department
    }else if(this.departmentFilter === "2"){
      department = "hr"
      answer = answer + department
    }else if(this.departmentFilter === "3"){
      department = "security"
      answer = answer + department
    }else if(this.departmentFilter === "4"){
      department = "development"
      answer = answer + department
    }else if(this.departmentFilter === "5"){
      department = "accounts"
      answer = answer + department
    }

    if(this.vaccinationFilter === "1"){
      firstDose = "yesFirst"
      answer = answer + " " + firstDose
    }else if(this.vaccinationFilter === "2"){
      secondDose = "yesSecond"
      answer = answer + " " + secondDose
    }

    if(this.diagnosisFilter === "1"){
      diagnosed = "yesDiagnosed"
      answer = answer + " " + diagnosed
    }else if(this.diagnosisFilter === "2"){
      diagnosed = "noDiagnosed"
      answer = answer + " " + diagnosed
    }
    this.dataSource.filter = answer
  }

  getAge(dob : string) : number{
    var dateMomentObject = moment(dob, "DD/MM/YYYY")
    var dateObject = dateMomentObject.toDate()
    var years = moment().diff(dateObject, 'years', false)
    return years
  }

  getEligibleIn(employee: Employee) : string{
    var eligibility : string
    if(employee.secondDose === "noSecond" && employee.testedNegative === false){
      eligibility = 'Not Eligible'
      return 'Not Eligible'
    }else{
      if(employee.secondDose === "yesSecond" && employee.testedNegative === false){
        var secondDateMomentObject = moment(employee.secondDate, "DD/MM/YYYY")
        var secondDateObject = secondDateMomentObject.toDate()
        var secondDateDays = moment().diff(secondDateObject, 'days', false)

        if(secondDateDays >= 15){
          eligibility = 'Eligible'
          return "Eligible"
        }else{
          eligibility = "Eligible in " + (15-secondDateDays) + " days."
          return "Eligible in " + (15-secondDateDays) + " days."
        }
      }else if(employee.secondDose === "noSecond" && employee.testedNegative === true){
        var dateNegativeMomentObject = moment(employee.dateNegative, "DD/MM/YYYY")
        var dateNegativeObject = dateNegativeMomentObject.toDate()
        var testedNegativeDays = moment().diff(dateNegativeObject, 'days', false)

        if(testedNegativeDays >= 15 && testedNegativeDays <= 90){
          eligibility = 'Eligible'
          return "Eligible"
        }else if(testedNegativeDays < 15){
          eligibility = "Eligible in " + (15-testedNegativeDays) + " days"
          return "Eligible in " + (15-testedNegativeDays) + " days"
        }else if(testedNegativeDays > 90){
          eligibility = 'Not Eligible'
          return 'Not Eligible'
        }
      }else{
        var dateNegativeMomentObject = moment(employee.dateNegative, "DD/MM/YYYY")
        var dateNegativeObject = dateNegativeMomentObject.toDate()
        var testedNegativeDays = moment().diff(dateNegativeObject, 'days', false)

        if(testedNegativeDays >= 15 && testedNegativeDays <= 90){
          eligibility = 'Eligible'
          return "Eligible"
        }else if(testedNegativeDays < 15){
          eligibility = "Eligible in " + (15 - testedNegativeDays) + " days"
          return "Eligible in " + (15 - testedNegativeDays) + " days"
        }
      }
    }
    // console.log(this.eligibileCount)
    // this.afs.doc(`employees/${employee.name}`)?.update({eligibilty: this.eligibilty})
  }

  filterObject(obj, filter): boolean {
    var data = ""
    var answer = []
    let finalAnswer = true
    JSON.parse(JSON.stringify(obj), (key,val) => {
      if (typeof val !== "object")
        data = data + val.toString();
    })
    data = data.toLowerCase()
    filter.split(' ').forEach(element => {
      if(data.includes(element.toLowerCase()) === false){
        answer.push(false)
      }else{
        answer.push(true)
      }
    })
    answer.forEach(element => {
      if(element === false){
        finalAnswer = false
    }}
    )
    return finalAnswer
  }

  clearFilter(){
    this.dataSource.filter = 'xxx'
    this.departmentFilter = ""
    this.vaccinationFilter = ""
    this.diagnosisFilter = ""
  }

  onClick(event, item){
    this.router.navigate(['/admin/empdetails', item.id]);
  }
}
