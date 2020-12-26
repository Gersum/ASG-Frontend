import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charts } from './../model/data';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  url= 'http://localhost:8080';

  



 httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
 apiUrl = 'http://localhost:8080/';
 

  constructor(public http : HttpClient) {}

  getChart(): Observable<Charts> {
    const url = `${this.url}/api/user/role/count`;
    return this.http.get<Charts>(url).pipe(
      tap(_ => console.log(`fetched chart data`))
    );
  }
      
    getIssues(){

      return this.http.get(`${this.url}/api/user/all`);
    }

    getIssueById(id){

      return this.http.get(`${this.url}/api/user/${id}`);
    }

    addIssue(username,email,password,roles){
      
       const user = {
        username : username,
        email :  email, 
        password : password,
        roles:roles
     
        
       };
           return this.http.post(`${this.url}/api/auth/signup`,user);
    }

    UpdateIssue(id,username,email){
      
      const user = {
        username : username,
        email :  email, 
       // password : password,
       // roles:roles
        
        
        
       };
          return this.http.put(`${this.url}/api/user/${id}`,user);
   }

      deleteIssue(id){
        return this.http.delete(`${this.url}/api/user/${id}`);

      }

      getUserCount(){
        return this.http.get(`${this.url}/api/user`);

      }

      getUserRoleCount(){
        return this.http.get(`${this.url}/api/user/role/count`);

      }

      
    


  // url= 'http://localhost:3000';
 

  // constructor(public http : HttpClient) {}
      
  //   getIssues(){

  //     return this.http.get(`${this.url}/issues`);
  //   }

  //   getIssueById(id){

  //     return this.http.get(`${this.url}/issues/${id}`);
  //   }

  //   addIssue(title,responsible,description,severity,status){
      
  //      const issue = {
  //       title : title,
  //       responsible : responsible, 
  //       description : description,
  //       severity    : severity ,
  //       status      : status
  //      };
  //          return this.http.post(`${this.url}/issues/add`,issue);
  //   }

  //   UpdateIssue(id,title,responsible,description,severity,status){
      
  //     const issue = {
  //      title : title,
  //      responsible : responsible, 
  //      description : description,
  //      severity    : severity ,
  //      status   : status
  //     };
  //         return this.http.patch(`${this.url}/issues/${id}`,issue);
  //  }

  //     deleteIssue(id){
  //       return this.http.delete(`${this.url}/issues/${id}`);

  //     }
//////////////////////////////////////////////////////////////////////////////
  // getAll() {
  //   return this.http.get(this.url);
  // }

  // get(id) {
   
  //   return this.http.get(`${this.url}/api/user/${id}`);
  // }

  // create(data) {
  //   return this.http.post(this.url, data);
  // }

  // update(id, data) {
  //  // return this.http.put(`${this.url}/${id}`, data);
  //   return this.http.put(`${this.url}/api/user/${id}`,data);
  // }

  // delete(id) {
  //   return this.http.delete(`${this.url}/api/user/${id}`);
  // }

  // deleteAll() {
  //   return this.http.delete(this.url);
  // }

  // findByTitle(title) {
  //   return this.http.get(`${this.url}?title=${title}`);
  }



   
  

