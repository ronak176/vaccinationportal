import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosisChartComponent } from './diagnosis-chart/diagnosis-chart.component';
import { StatusChartComponent } from './status-chart/status-chart.component';
import { VaccinationChartComponent } from './vaccination-chart/vaccination-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DiagnosisChartComponent,
    StatusChartComponent,
    VaccinationChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ChartsModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    DiagnosisChartComponent,
    StatusChartComponent,
    VaccinationChartComponent
  ]
})
export class DataChartsModule { }
