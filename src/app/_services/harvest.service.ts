
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charts } from './../model/data';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HarvestService {

  //url= 'http://localhost:8080';
  url= 'http://backend:3000';

  constructor(public http : HttpClient) {}

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

  // Total Harvest count for all farmers 
  getHarvestCount(){
    return this.http.get(`${this.url}/api/harvests/count/harvest/`);
  }

  getHarvestTotalQuantity(){
    return this.http.get(`${this.url}/api/harvests/quantity/totalSum/`);

  }

  getHarvestTotal(){
    return this.http.get(`${this.url}/api/harvests/quantity/allTotalSum/`);

  }

   // number of harvest for each extension worker
  getSpecificExtentionHarvest() {
   
    return this.http.get(`${this.url}/api/harvests/count/SpecificHarvest/`);
  }

  // Sum  of Quantity for each extension worker
  getSpecificExtentionHarvestEach() {
   
    return this.http.get(`${this.url}/api/harvests/quantity/allTotalSumEach`);
  }

getHarvestEachExChart(): Observable<Charts> {
  const url = `${this.url}/api/harvests/count/SpecificHarvest/`;
  return this.http.get<Charts>(url).pipe(
    tap(_ => console.log(`Harvest chart data`))
  );
}

}
  



