import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as Chart from 'chart.js';
import { Label } from 'ng2-charts';
import {Charts} from '../../model/data';
import { IssuesService } from './../issues.service';
import * as ChartLabel from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Ng7ChartJs By DotNet Techy';
  LineChart:any;
  BarChart:any;
  PieChart : any;
  userCount: any;
  chartData: Charts[] = [];
 // ChartLabel:any;

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
    }
  };
  public pieChartLabels: Label[] = [] ;
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public  pieChartPlugins = [ChartLabel];
  public pieChartColors = [];
  
  
  



  constructor(private issueService :IssuesService) { }

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
        //this.pieChartLabels.push(ch._id);
        this.pieChartData.push(ch.count);
        backgrounds.push(`rgba(${0 + (idx * 40)}, ${255 - (idx * 40)}, ${0 + (idx * 40)}, 0.8)`);
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


  ngOnInit() 
  {
    this.loadUserCount();
    this.getChartData();
    
     // Line chart:
this.LineChart = new Chart('lineChart', {
  type: 'line',
data: {
 labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
 datasets: [{
     label: 'Number of Items Sold in Months',
      data: [],
     fill:false,
     lineTension:0.2,
     borderColor:"red",
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Line Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

// Bar chart:
this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: '# of Votes',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});



// pie chart:
this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: '# of Votes',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});


  }
  loadUserCount(){
    this.issueService.getUserCount().subscribe((users)=>{
      this.userCount = users[0].count;
      
      console.log("users"+ this.userCount)
    });
  }
}
