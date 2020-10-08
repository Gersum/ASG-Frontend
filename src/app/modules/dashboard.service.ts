import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkModel } from '../model/mark-model';
import { Observable } from 'rxjs';
//import { MarkModel } from './../model/mark-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = 'http://localhost:3000/students';
    constructor(private http : HttpClient) {
     const dataset=this.http.get(name);
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
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66,6,7,8];
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