import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Employee } from 'src/app/shared/interfaces/employee/employee';
import { userDetails } from 'src/app/shared/interfaces/user/userDetails';

@Component({
  selector: 'app-diagnosis-form',
  templateUrl: './diagnosis-form.component.html',
  styleUrls: ['./diagnosis-form.component.css'],
})
export class DiagnosisFormComponent implements OnInit {
  pdfSrc  = "https://cwi.edu/sites/default/files/file_contenttype/sop_returntowork_final_0.pdf"
  formGroup: FormGroup;
  newDetails: Employee = {};
  currentUser: userDetails;
  currentUserDetails: Employee;
  firstTimeResponse: Boolean = false;
  formSubmitted: Boolean = false;
  currentUserId: string;
  path : String
  uploadValid = false
  uploadSuccess = false
  diagnosisDate = undefined
  negativeDate = undefined

  public constructor(
    private af: AngularFireStorage,
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.formGroup = new FormGroup({
      location : new FormControl(),
      diagnosed: new FormControl(),
      dateOfDiagnosis: new FormControl(),
      symptoms: new FormControl(),
      testedNegative: new FormControl(),
      dateNegative: new FormControl(),
      positiveFamily: new FormControl(),
    });

    this.uploadSuccess = false
  }

  ngOnInit(): void {
    this.uploadValid = false
    this.uploadSuccess = false
    this.negativeDate = undefined
    this.diagnosisDate = undefined
    this.afAuth.authState.subscribe((user) => {
      this.currentUserId = user.uid;
      this.afs
        .doc(`usersData/${user.uid}`)
        .valueChanges()
        .subscribe((res) => {
          this.currentUser = res;
          this.formSubmitted = this.currentUser.dFormSubmit
          this.afs
            .doc(`employees/${this.currentUser.name}`)
            .valueChanges()
            .subscribe((res) => {
              this.currentUserDetails = res;
              let parsed = moment(this.currentUserDetails.dob, "DD/MM/YYYY")
              //console.log(moment().diff(parsed, 'years'))
            });
        });
    });
    
  }

  clickLocation(){
    this.newDetails.location = this.formGroup.controls['location'].value
    //console.log(this.newDetails.location)
  }

  clickDiagnosed() {
    this.newDetails.diagnosed = this.formGroup.controls['diagnosed'].value;
    //console.log(this.newDetails.diagnosed);
  }

  clickDateOfDiagnosis() {
    const momentDate = new Date(
      this.formGroup.controls['dateOfDiagnosis'].value
    );
    const formattedDate = moment(momentDate).format('DD/MM/YYYY');
    this.newDetails.dateOfDiagnosis = formattedDate;
    //console.log(this.newDetails.dateOfDiagnosis);
  }

  clickSymptoms() {
    this.newDetails.symptoms = this.formGroup.controls['symptoms'].value;
    //console.log(this.newDetails.symptoms);
  }

  clickTestedNegative() {
    this.newDetails.testedNegative =
      this.formGroup.controls['testedNegative'].value;
    //console.log(this.newDetails.testedNegative);
  }

  clickDateNegative() {
    const momentDate = new Date(this.formGroup.controls['dateNegative'].value);
    const formattedDate = moment(momentDate).format('DD/MM/YYYY');
    this.newDetails.dateNegative = formattedDate;
    //console.log(this.newDetails.dateNegative);
  }

  clickPositiveFamily() {
    this.newDetails.positiveFamily =
      this.formGroup.controls['positiveFamily'].value
    //console.log(this.newDetails.positiveFamily)
  }

  clickSubmit() {
    if(this.newDetails.diagnosed === 'noDiagnosed'){
      this.newDetails.dateOfDiagnosis = ""
      this.newDetails.positiveFamily = false
      this.newDetails.symptoms = ""
      this.newDetails.testedNegative = false
      this.newDetails.dateNegative = ""
    }
    this.afs
      .doc('employees/' + this.currentUserDetails.name)
      .update(this.newDetails);
    this.afs
      .doc('usersData/' + this.currentUserId)
      .update({ dFormSubmit: true })
  }

  clickEdit() {
    this.afs
      .doc('usersData/' + this.currentUserId)
      .update({ dFormSubmit: false })
  }

  upload($event){
    this.path = $event.target.files[0]
    this.uploadValid = true
  }

  uploadReport(){
    this.af.upload(`${'/negativeReports'}/${this.currentUserDetails.name}`, this.path)
    this.uploadSuccess = true
  }
}
