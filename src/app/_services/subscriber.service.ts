
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  url= 'http://localhost:8080';
 

  constructor(public http : HttpClient) {}
      
  //   getSubscribers(){

  //     return this.http.get(`${this.url}/api/user/all`);
  //   }

  //   getSubscriberById(id){

  //     return this.http.get(`${this.url}/api/user/${id}`);
  //   }

  //   addSubscriber(username,email,password){
      
  //      const user = {
  //       username : username,
  //       email :  email, 
  //       password : password,
  //      // roles:roles
     
        
  //      };
  //          return this.http.post(`${this.url}/api/auth/signup`,user);
  //   }

  //   UpdateSubscriber(id,username,email,roles){
      
  //     const user = {
  //       username : username,
  //       email :  email, 
  //      // password : password,
  //       roles:roles
        
        
        
  //      };
  //         return this.http.put(`${this.url}/api/user/${id}`,user);
  //  }

  //     deleteSubscriber(id){
  //       return this.http.delete(`${this.url}/api/user/${id}`);

  //     }
//////////////////////////////////////////////////////////////////////////////
  getAll() {
    return this.http.get(`${this.url}/api/subscribers`);
  }

  get(id) {
   
    return this.http.get(`${this.url}/api/subscribers/${id}`);
  }

  getLoc(id) {
   
    return this.http.get(`${this.url}/api/subscribers/${id}/location`);
  }

  

  create(data) {
    return this.http.post(`${this.url}/api/subscribers`, data);
  }

  createFarmlocation(id,longitude,latitude) {
    const data = {
      longitude : longitude,
      latitude :  latitude, 
   
     // farmlocation:farmlocation
    };
    return this.http.post(`${this.url}/api/subscribers/${id}/location`, data);
  }



  update(id, name,city,phone) {
    const data = {
      name : name,
      city :  city, 
      phone:phone,
     // farmlocation:farmlocation
    };
   // return this.http.put(`${this.url}/${id}`, data);
    return this.http.put(`${this.url}/api/subscribers/${id}`,data);
  }

  delete(id) {
    return this.http.delete(`${this.url}/api/subscribers/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.url);
  }

  // findByTitle(title) {
  //   return this.http.get(`${this.url}?title=${title}`);
  // }


}
   
  



