import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ChartType, ChartOptions } from 'chart.js';

import { Label } from 'ng2-charts';
import {Charts} from '../../../model/data';
import { IssuesService } from '../../../modules/issues.service';
import * as ChartLabel from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

 
  
  userCount: any;
  chartData: Charts[] = [];

 // @Input() data = [];
 datasets: [{
  label: 'Number of Items Sold in Months',
   data: [],
  fill:false,
  lineTension:0.2,
  borderColor:"red",
  borderWidth: 1
}]

  public pieChartOptions: ChartOptions = {
    
    responsive: true,
    legend: {
      position: 'top',
     
     
       // display: true,
        
            
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },

    
  };
  public pieChartLabels: Label[] = [] ;
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public  pieChartPlugins = [ChartLabel];
  public pieChartColors = [];
  label: any;
  
  
  



  constructor(public dashboardservice :DashboardService , private issueService :IssuesService) { }

  
 
  




  getChartData() {
    this.issueService.getChart()
    .subscribe((res: any) => {
      console.log(res);
      
      this.chartData = res;
      this.pieChartLabels = ['Seeder','Total Admin','Extention worker','Alimuni user'];
      this.pieChartData = [];
      this.pieChartColors = [];
      
      const backgrounds = [];
      this.chartData.forEach((ch, idx) => {
       // this.pieChartLabels.push(ch._id);
        this.pieChartData.push(ch.count);
        backgrounds.push(`rgba(${0 + (idx * 40)}, ${255 - (idx * 40)}, ${0 + (idx * 40)}, 0.5)`);
      });
      this.pieChartColors = [
        {
          backgroundColor: backgrounds
        }
      ];
    }, err => {
      console.log(err);
    });
  }


  ngOnInit() {
    this.loadUserCount();
    this.getChartData();
  }
  
  loadUserCount(){
    this.issueService.getUserCount().subscribe((users)=>{
      this.userCount = users[0].count;
      
      console.log("users"+ this.userCount)
    });
  }
}