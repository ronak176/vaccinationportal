import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Label, SingleDataSet } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/shared/services/employee/employee.service';

@Component({
  selector: 'app-status-chart',
  templateUrl: './status-chart.component.html',
  styleUrls: ['./status-chart.component.css'],
})
export class StatusChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public eligibleCount = 1
  public nonEligibleCount = 2
  public pendingResponseCount = 3
  public pieChartLabels: Label[] = ['Eligible', 'Not Eligible', 'Pending Response'];
  public pieChartData: SingleDataSet
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public _subscription = new Subscription()
  public isDataAvailable = false

  public options: any = {
    legend: {
      position: 'bottom',
    },
  };

  constructor(private service : EmployeeService) {
    
  }

  ngOnInit() {
    this.service.eligibleValueChange.subscribe(res => {
      this.eligibleCount = res
      //console.log(this.eligibleCount)
    })

    this.service.nonEligibleValueChange.subscribe(res => {
      this.nonEligibleCount = res
    })

    this.service.pendingValueChange.subscribe(res => {
      this.pendingResponseCount  = res
    })

    setTimeout(()=> this.setData(this.eligibleCount, this.nonEligibleCount, this.pendingResponseCount), 3000)  
  }

  setData(ec : number, nec: number, pc: number){
    this.pieChartData = [ec, nec, pc]
    this.isDataAvailable = true
  }
}
