import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'app-vaccination-chart',
  templateUrl: './vaccination-chart.component.html',
  styleUrls: ['./vaccination-chart.component.css'],
})
export class VaccinationChartComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public firstDoseCount = 0
  public secondDoseCount = 0
  public noDoseCount = 0
  public isDataAvailable = false
  public pieChartLabels: Label[] = ['Both done', 'First done', 'Not Vaccinated'];
  public pieChartData: SingleDataSet
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public options: any = {
    legend: {
      position: 'bottom',
    },
  };

  constructor(private service : EmployeeService) {}

  ngOnInit() {
    this.service.firstDoseValueChange.subscribe(res => this.firstDoseCount = res)
    this.service.secondDoseValueChange.subscribe(res => this.secondDoseCount = res)
    this.service.noDoseValueChange.subscribe(res => this.noDoseCount = res)
    setTimeout(()=> this.setData(this.firstDoseCount, this.secondDoseCount, this.noDoseCount), 3000)
  }

  setData(fd : number, sd: number, nd: number){
    this.pieChartData = [sd, fd, nd]
    this.isDataAvailable = true
  }
}
