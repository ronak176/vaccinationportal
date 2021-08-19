import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'app-diagnosis-chart',
  templateUrl: './diagnosis-chart.component.html',
  styleUrls: ['./diagnosis-chart.component.css'],
})
export class DiagnosisChartComponent implements OnInit {
  public testedNegativeCount = 0
  public diagnosedCount = 0
  public isDataAvailable = false
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Currently diagnosed',
    'Antibodies Present',
  ];
  public doughnutChartData: SingleDataSet
  public doughnutChartType: ChartType = 'doughnut';

  public options: any = {
    legend: {
      position: 'bottom',
    },
    layout: {
      padding: '20px',
    },
  };

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.service.testedNegativeValueChange.subscribe(res => {
      this.testedNegativeCount = res
      //console.log(res)
    })
    this.service.diagnosedValueChange.subscribe(res => this.diagnosedCount = res)

    setTimeout(()=> this.setData(this.testedNegativeCount, this.diagnosedCount), 3000)  

  }

  setData(tnc : number, dc: number){
    this.doughnutChartData = [dc, tnc]
    this.isDataAvailable = true
  }
}
