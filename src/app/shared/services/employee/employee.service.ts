import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../../interfaces/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData ?: Employee;
  selectedEmployee : Employee;
  eligibleCount = 0
  nonEligibleCount = 0
  pendingResponseCount = 0
  firstDoseCount = 0
  secondDoseCount = 0
  noDoseCount = 0
  testedNegativeCount = 0
  diagnosedCount = 0

  eligibleValueChange: Subject<number> = new Subject<number>()
  nonEligibleValueChange: Subject<number> = new Subject<number>()
  pendingValueChange: Subject<number> = new Subject<number>()
  firstDoseValueChange: Subject<number> = new Subject<number>() 
  secondDoseValueChange: Subject<number> = new Subject<number>() 
  noDoseValueChange : Subject<number> = new Subject<number>() 
  testedNegativeValueChange : Subject<number> = new Subject<number>() 
  diagnosedValueChange : Subject<number> = new Subject<number>() 

  constructor(private firestore : AngularFirestore) {}

  getEmployees(){
    return this.firestore.collection('employees').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Employee;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  eligibleChange(eligibleCount: number){
    this.eligibleCount = eligibleCount
    this.eligibleValueChange.next(this.eligibleCount)  
  }

  nonEligibleChange(nonEligibleCount: number){
    this.nonEligibleCount = nonEligibleCount
    this.nonEligibleValueChange.next(this.nonEligibleCount)  
  }

  pendingChange(pendingResponseCount: number){
    this.pendingResponseCount = pendingResponseCount
    this.pendingValueChange.next(this.pendingResponseCount)  
  }

  firstDoseChange(firstDoseCount: number){
    this.firstDoseCount = firstDoseCount
    this.firstDoseValueChange.next(this.firstDoseCount)
  }

  secondDoseChange(secondDoseCount: number){
    this.secondDoseCount = secondDoseCount
    this.secondDoseValueChange.next(this.secondDoseCount)
  }

  noDoseChange(noDoseCount: number){
    this.noDoseCount = noDoseCount
    this.noDoseValueChange.next(this.noDoseCount)
  }

  testedNegativeChange(testedNegativeCount: number){
    this.testedNegativeCount = testedNegativeCount
    this.testedNegativeValueChange.next(this.testedNegativeCount)
  }

  diagnosedChange(diagnosedCount : number){
    this.diagnosedCount = diagnosedCount
    this.diagnosedValueChange.next(this.diagnosedCount)
  }

  selectEmployee(item : Employee){
    this.selectedEmployee = item; 
    // console.log(this.selectedEmployee);
  }
}
