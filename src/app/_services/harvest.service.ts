
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HarvestService {

  url= 'http://localhost:8080';
 

  constructor(public http : HttpClient) {}
      

//////////////////////////////////////////////////////////////////////////////
  getAll() {
    return this.http.get(`${this.url}/api/harvests`);
  }

  get(id) {
   
    return this.http.get(`${this.url}/api/harvests/${id}`);
  }

  getLoc(id) {
   
    return this.http.get(`${this.url}/api/harvests/${id}/location`);
  }

  

  create(data) {
    return this.http.post(`${this.url}/api/harvests`, data);
  }

  createFarmlocation(id,longitude,latitude) {
    const data = {
      longitude : longitude,
      latitude :  latitude, 
   
     // farmlocation:farmlocation
    };
    return this.http.post(`${this.url}/api/harvests/${id}/location`, data);
  }



  update(id, farmer,crop,operation,quantity,quality) {
      const data = {
      farmer : farmer,
      crop : crop,
      operation : operation, 
      quantity:quantity,
      quality:quality,

    };
  
    return this.http.put(`${this.url}/api/harvests/${id}`,data);
  }

  delete(id) {
    return this.http.delete(`${this.url}/api/harvests/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.url);
  }

}
   
  



