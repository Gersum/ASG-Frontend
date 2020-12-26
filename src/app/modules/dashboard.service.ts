import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkModel } from '../model/mark-model';
import { Observable } from 'rxjs';
import { IssuesService } from 'src/app/modules/issues.service';

//import { MarkModel } from './../model/mark-model';
import { User } from '../model/user.model';
import { Charts } from '../model/data';
//import { User } from './../../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  userCount: number;
  userRoleCount: number;
  userAdminRoleCount: number;
  userUserRoleCount: number;
  userExtentionRoleCount: number;
  userSeederRoleCount: number;
  users: User[];
  dataSource : any;
  chartData: Charts[] = [];
  

  url = 'http://localhost:3000/students';
    constructor(private http : HttpClient,public issuesService:IssuesService  ) {
    // const dataset=this.http.get(name);
      console.log('StudentserviceService called');
     // console.log(dataset);
     }
     Get(url):Observable<MarkModel[]>{
       return this.http.get<MarkModel[]>(url);
     }
  
     getStudent(){
  
      return this.http.get(`${this.url}`);
    }

  
  
 

  bigChart() {

    
    return this.chartData;
  }

  cards() {
     

    return [8, 7, 6, 66,39,78,71];
  }
  loadAdminRoleCount(){
    this.issuesService.getUserRoleCount().subscribe((users)=>{
      this.userAdminRoleCount = users[1].count; // 1 ---> admin
    //  console.log("roles count:"+data[0].count)
    });
  }
  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}