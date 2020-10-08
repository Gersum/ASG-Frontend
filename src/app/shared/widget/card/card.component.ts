import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { MarkModel } from './../../../model/mark-model';
//import { StudentserviceService } from './../../../service/studentservice.service';
//import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() label: string ;
  @Input() total: string ;
  @Input() percentage: string ;

  @Input() data=[];
  students: MarkModel[];


  
  
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {

  //  this.fetchStudents();
    this.chartOptions = {
      
        chart: {
            type: 'area',
            backgroundColor:null,
            borderwidth:0,
            margin:[2,2,2,2],
            height: 60
        },
        title: {
            text: null},
        subtitle: {
            text: null
        },
        
        tooltip: {
            split: true,
            outside:true
        },
        legend:{
          enabled:false
        },
        credits:{
           enabled :false
        },
       exporting:{
             enabled:false,
       },
       xAxis: {
         lables:{
            enabled:false,
         },

         title:{
          text:null,
       },
         startOnTick: false,
         endOnTick:false,
         tickOptions: []
              },

              yAxis: {
                lables:{
                   enabled:false,
                },
       
                title:{
                 text:null,
              },
                startOnTick: false,
                endOnTick:false,
                tickOptions: []
                     },
        series: [
            { data:this.data }
        ]

    };
  
  }
  // fetchStudents(){
  //   this.studentService
  //       .getStudent()
  //       .subscribe((data:MarkModel[])=>{
  //         this.students = data;
  //         console.log("Data requested");
  //         console.log(this.students);
  //       });    
  }



    
    // this.getApiResponse(this.url).then(
    //   data=>{
    //     const subjectMarks=[];
    //     const names=[];
    //     data.forEach(row=>{
    //       const temp_row=[
    //         row.english,
    //         row.maths,
    //         row.science
    //       ];
    //       names.push(row.name)
    //       subjectMarks.push(temp_row);
    //     });
    //     this.studentModel=subjectMarks;
    //     this.studentNames=names;
    //     var dataSeries=[];
    //     for (var i = 0; i <this.studentModel.length;i++){
    //       dataSeries.push({
    //         data:this.studentModel[i],
    //         name:this.studentNames[i]
    //       });
    //     }
    //     this.chartOptions.series = dataSeries;
    //     Highcharts.chart('Container',this.chartOptions)
    //   },
    
    // error=>{
    //   console.log('something went wrong');
    // })
    
    // HC_exporting(Highcharts);
    // setTimeout(()=>{
    //  window.dispatchEvent(
    //    new Event('resize')
    //  )
    
    // },300);
    //   }
    
    //   getApiResponse(url){
    //     return this.StudentserviceService.Get(this.url)
    //     .toPromise().then(res=>{
    //       return res;
    //     })
    //   }




// import { Component, OnInit, Input } from '@angular/core';
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';
// import { MarkModel } from './../../../model/mark-model';
// import { StudentserviceService } from './../../../service/studentservice.service';
// //import { Container } from '@angular/compiler/src/i18n/i18n_ast';
// @Component({
//   selector: 'app-widget-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.scss']
// })
// export class CardComponent implements OnInit {
  
//   //@Input() label: string ;
//  // @Input() total: string ;
//   //@Input() percentage: string ;
//   studentModel:MarkModel[];
//   url: string = 'http://localhost:3000/students';
//   studentNames:any;

//   //@Input() data=[];


  
  
//   //chartOptions: {};
//   //Highcharts = Highcharts;

//   constructor(private StudentserviceService: StudentserviceService) { }
//     public chartOptions : any  = {
      
//     chart: {
//         type: 'line',
//        // backgroundColor:null,
//         borderwidth:0,
//         margin:[2,2,2,2],
//         height: 60
//     },
//     title: {
//         text: null},
//     subtitle: {
//         text: null
//     },
    
//     tooltip: {
//         split: true,
//         outside:true
//     },
//     legend:{
//       enabled:false
//     },
//     credits:{
//        enabled :false
//     },
//    exporting:{
//          enabled:false,
//    },
//    xAxis: {
//      categories:['English','Maths','Science']},

//           yAxis: {
//             lables:{
//                enabled:false,
//             },
   
//             title:{
//              text:'Marks',
//           },
            
//                  },
//     series: [],
    
//     }
//   ngOnInit() {
   
// this.getApiResponse(this.url).then(
//   data=>{
//     const subjectMarks=[];
//     const names=[];
//     data.forEach(row=>{
//       const temp_row=[
//         row.english,
//         row.maths,
//         row.science
//       ];
//       names.push(row.name)
//       subjectMarks.push(temp_row);
//     });
//     this.studentModel=subjectMarks;
//     this.studentNames=names;
//     var dataSeries=[];
//     for (var i = 0; i <this.studentModel.length;i++){
//       dataSeries.push({
//         data:this.studentModel[i],
//         name:this.studentNames[i]
//       });
//     }
//     this.chartOptions.series = dataSeries;
//     Highcharts.chart('Container',this.chartOptions)
//   },

// error=>{
//   console.log('something went wrong');
// })

// HC_exporting(Highcharts);
// setTimeout(()=>{
//  window.dispatchEvent(
//    new Event('resize')
//  )

// },300);
//   }

//   getApiResponse(url){
//     return this.StudentserviceService.Get(this.url)
//     .toPromise().then(res=>{
//       return res;
//     })
//   }

// }



