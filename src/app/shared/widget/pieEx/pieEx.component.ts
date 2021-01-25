import { Component, OnInit, Input } from '@angular/core';
//import * as Highcharts from 'highcharts';
//import HC_exporting from 'highcharts/modules/exporting';
import { ChartType, ChartOptions } from 'chart.js';
//import * as Chart from 'chart.js';
import { Label } from 'ng2-charts';
import {Charts} from '../../../model/data';
import * as ChartLabel from 'chartjs-plugin-datalabels';

import { HarvestService } from 'src/app/_services/harvest.service';
import { PlantService } from 'src/app/_services/plant.service';

@Component({
  selector: 'app-widget-pie-ex',
  templateUrl: './pieEx.component.html',
  styleUrls: ['./pieEx.component.scss']
})
export class PieExComponent implements OnInit {

  userCount: any;
  chartData: Charts[] = [];

  @Input() data = [];

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
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public  pieChartPlugins = [ChartLabel];
  public pieChartColors = [];
 
  constructor(private HarvestService :HarvestService , private PlantService : PlantService) { }

  getChartData() {
    this.HarvestService.getHarvestEachExChart()
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
        backgrounds.push(`rgba(${0 + (idx * 40)}, ${255 - (idx * 40)}, ${0 + (idx * 40)}, 0.6)`);
      });
      this.pieChartColors = [
        {
          backgroundColor: backgrounds
        }
      ];
    }, 
    
    err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.loadUserCount();
    this.getChartData();
  }
  
  loadUserCount(){
    this.HarvestService.getHarvestCount().subscribe((users)=>{
      this.userCount = users[0].count;
      console.log("users"+ this.userCount)
    });
  }
}