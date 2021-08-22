import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Employee } from 'src/app/shared/interfaces/employee/employee';
import { userDetails } from 'src/app/shared/interfaces/user/userDetails';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import {AngularFireStorage} from '@angular/fire/storage'

@Component({
  selector: 'app-vaccination-form',
  templateUrl: './vaccination-form.component.html',
  styleUrls: ['./vaccination-form.component.css'],
})
export class VaccinationFormComponent implements OnInit, AfterViewChecked {
  isCompleted = false
  pdfSrc  = "https://cwi.edu/sites/default/files/file_contenttype/sop_returntowork_final_0.pdf"
  isLinear = false
  currentUserId: string;
  currentUser: userDetails;
  currentUserDetails: Employee;
  newDetails: Employee = {};
  firstFormGroup: FormGroup;
  gotFirstDose: Boolean = false;
  gotSecondDose: Boolean = false;
  formSubmitted: Boolean = false;
  firstTimeResponse: Boolean = false;
  firstDateOriginal : string;
  secondDateOriginal : string;
  firstPath : String
  secondPath : String
  uploadValidFirst = false
  uploadValidSecond = false
  uploadSuccessFirst = false
  uploadSuccessSecond = false
  

  public constructor(
    private af : AngularFireStorage,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private authService: AuthService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.firstFormGroup = new FormGroup({
      location : new FormControl(),
      firstDose: new FormControl(),
      firstDate: new FormControl(Validators.minLength(1)),
      vaccine: new FormControl(),
      secondDose: new FormControl(),
      secondDate: new FormControl(),
      firstReason : new FormControl(),
      secondReason : new FormControl()
    });
    this.firstTimeResponse = false;
    this.uploadSuccessFirst = false
    this.uploadSuccessSecond = false
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.uploadValidFirst = false
    this.uploadValidSecond = false
    this.firstDateOriginal = null
    this.secondDateOriginal = null
    this.afAuth.authState.subscribe((user) => {
      this.currentUserId = user.uid;
      this.afs
        .doc(`usersData/${user.uid}`)
        .valueChanges()
        .subscribe((res) => {
          this.currentUser = res;
          this.formSubmitted = this.currentUser.vFormSubmit;
          this.afs
            .doc(`employees/${this.currentUser.name}`)
            .valueChanges()
            .subscribe((res) => {
              this.currentUserDetails = res;
              this.setNewDetails(res);
            });
        });
    });
  }

  setNewDetails(currentUserDetails: Employee) {
    this.newDetails.name = currentUserDetails.name;
    this.newDetails.gender = currentUserDetails.gender;
    this.newDetails.address = currentUserDetails.address;
    this.newDetails.mobile = currentUserDetails.mobile;
    this.newDetails.department = currentUserDetails.department;
    this.newDetails.role = currentUserDetails.role;
    this.newDetails.firstDose = currentUserDetails.firstDose;
    this.newDetails.firstDate = currentUserDetails.firstDate;
    this.newDetails.secondDose = currentUserDetails.secondDose;
    this.newDetails.secondDate = currentUserDetails.secondDate;
    this.newDetails.vaccine = currentUserDetails.vaccine;
    this.newDetails.location = currentUserDetails.location;
    this.newDetails.firstReason = currentUserDetails.firstReason
    this.newDetails.secondReason = currentUserDetails.secondReason
  }

  clickLocation(){
    this.newDetails.location = this.firstFormGroup.controls['location'].value
  }

  clickFirstDose() {
    this.newDetails.firstDose = this.firstFormGroup.controls['firstDose'].value;
    if (this.newDetails.firstDose == "yesFirst") {
      this.gotFirstDose = true;
    }
  }

  clickFirstDate() {
    this.firstDateOriginal = this.firstFormGroup.controls['firstDate'].value
    const momentDate = new Date(
      this.firstFormGroup.controls['firstDate'].value
    );
    const formattedDate = moment(momentDate).format('DD/MM/YYYY');
    this.newDetails.firstDate = formattedDate;
  }

  clickVaccine() {
    this.newDetails.vaccine = this.firstFormGroup.controls['vaccine'].value;
  }

  clickSecondDose() {
    this.secondDateOriginal = this.firstFormGroup.controls['secondDose'].value
    this.newDetails.secondDose =
      this.firstFormGroup.controls['secondDose'].value;
    if (this.newDetails.secondDose == "yesSecond") {
      this.gotSecondDose = true;
    }
  }

  clickSecondDate() {
    const momentDate = new Date(
      this.firstFormGroup.controls['secondDate'].value
    );
    const formattedDate = moment(momentDate).format('DD/MM/YYYY');
    this.newDetails.secondDate = formattedDate;
  }

  clickSubmit() {
    if(this.newDetails.firstDose === 'noFirst'){
      this.newDetails.firstDate = ""
      this.newDetails.secondDate = ""
      this.newDetails.secondDose = "noSecond"
      this.newDetails.secondReason = ""
      this.newDetails.vaccine = ""
    }else if(this.newDetails.secondDose === 'noSecond' && this.newDetails.firstDose === 'yesFirst'){
      this.newDetails.secondDate = ""
    }
    this.afs.doc('employees/' + this.newDetails.name).update(this.newDetails);
    this.afs
      .doc('usersData/' + this.currentUserId)
      .update({ vFormSubmit: true });
    this.firstTimeResponse = true;
  }

  clickEdit(){
    this.afs
      .doc('usersData/' + this.currentUserId)
      .update({ vFormSubmit: false });
    this.firstTimeResponse = false;
  }

  uploadFirst($event){
    this.firstPath = $event.target.files[0]
    this.uploadValidFirst = true
  }

  uploadFirstCertificate(){
    this.af.upload(`${'/firstDoseCertificates'}/${this.currentUserDetails.name}`, this.firstPath)
    const ref = this.af.ref(`${'/firstDoseCertificates'}/${this.currentUserDetails.name}`)
    this.uploadSuccessFirst = true
  }

  uploadSecond($event){
    this.secondPath = $event.target.files[0]
    this.uploadValidSecond = true
  }

  uploadSecondCertificate(){
    this.af.upload(`${'/secondDoseCertificates'}/${this.currentUserDetails.name}`, this.secondPath)
    this.uploadSuccessSecond = true
  }

  downloadFirstCertificate(){
    const ref = this.af.ref(`${'/firstDoseCertificates'}/${this.currentUserDetails.name}`)
    var url : string
    ref.getDownloadURL().subscribe(res => {
      url = res
      window.open(url)
    })
    
  }

}
