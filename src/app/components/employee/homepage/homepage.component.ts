import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Article } from 'src/app/shared/interfaces/covid-news/article';
import { Results } from 'src/app/shared/interfaces/covid-news/results';
import { Stats } from 'src/app/shared/interfaces/covid-stats/stats';
import { Employee } from 'src/app/shared/interfaces/employee/employee';
import { userDetails } from 'src/app/shared/interfaces/user/userDetails';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';
import { GetCovidStatsService } from 'src/app/shared/services/get-covid-stats/get-covid-stats.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  
  employee : Employee;
  list : Employee[];
  userD : userDetails;
  currentUser : userDetails
  casesCount: number = 0;
  recoveredCount: number = 0;
  deathsCount: number = 0;
  activeCount: number = 0;
  covidStats: Stats;
  news : Article[]
  news2 : Results[]

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private af : AngularFireStorage, private breakpointObserver: BreakpointObserver, public authService: AuthService,
    public router: Router,
    public ngZone: NgZone, private service : EmployeeService, private firestore : AngularFirestore, private afAuth: AngularFireAuth,
    private getStats: GetCovidStatsService,
    private changeDetectorRef: ChangeDetectorRef) { }

    cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return {
            columns: 1,
            news: {cols : 1, rows : 5},
            stats: {cols : 1, rows: 4},
            miniCard: { cols: 1, rows: 1 },
            chart: { cols: 1, rows: 5 },
            table: { cols: 1, rows: 4 },
          };
        }
  
        return {
          columns: 5,
          news : {cols: 1, rows: 4},
          stats : {cols: 3, rows: 2},
          miniCard: { cols: 1, rows: 2 },
          chart: { cols: 3, rows: 2 },
          table: { cols: 1, rows: 2 },
        };
      })
    );
    
  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.firestore.doc(`usersData/${user.uid}`).valueChanges().subscribe(res => {
        this.currentUser = res
        this.firestore.collection('employees').doc(this.currentUser.name).valueChanges().subscribe(res => {
          this.employee = res;
          console.log(this.employee)
        })
      })
    })

    this.getStats.getCovidNews().subscribe((data) => {
      this.news = data.articles
      // console.log(this.news)
    })

    this.getStats.getCovidNews2().subscribe((data) => {
      this.news2 = data.articles
      console.log(this.news2)
    })

    this.getStats.getCovidStats().subscribe((data) => {
      this.covidStats = data;
      this.changeDetectorRef.markForCheck();

      let casesCountStop: any = setInterval(() => {
        this.casesCount++;
        if (this.casesCount == Math.floor(this.covidStats.cases / 100000)) {
          clearInterval(casesCountStop);
        }
      }, 10);

      let activeCountStop: any = setInterval(() => {
        this.activeCount++;
        if (this.activeCount == Math.floor(this.covidStats.active / 100000)) {
          clearInterval(activeCountStop);
        }
      }, 30);

      let recoveredCountStop: any = setInterval(() => {
        this.recoveredCount++;
        if (
          this.recoveredCount == Math.floor(this.covidStats.recovered / 100000)
        ) {
          clearInterval(recoveredCountStop);
        }
      }, 10);

      let deathCountStop: any = setInterval(() => {
        this.deathsCount++;
        if (this.deathsCount == Math.floor(this.covidStats.deaths / 100000)) {
          clearInterval(deathCountStop);
        }
      }, 30);
    });
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
