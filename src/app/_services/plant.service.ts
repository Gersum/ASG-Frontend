
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charts } from './../model/data';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  url= 'http://localhost:8080';
 
  constructor(public http : HttpClient) {}
      
//////////////////////////////////////////////////////////////////////////////
  getAll() {
    return this.http.get(`${this.url}/api/plants`);
  }

  get(id) {
   
    return this.http.get(`${this.url}/api/plants/${id}`);
  }

  getLoc(id) {
   
    return this.http.get(`${this.url}/api/plants/${id}/location`);
  }

  create(data) {
    return this.http.post(`${this.url}/api/plants`, data);
  }

  createFarmlocation(id,longitude,latitude) {
    const data = {
      longitude : longitude,
      latitude :  latitude, 
   
     // farmlocation:farmlocation
    };
    return this.http.post(`${this.url}/api/plants/${id}/location`, data);
  }
  update(id, farmer,crop,operation,quantity,quality,type,variety,rainfall, yearOfrelease, seedRate,additionalInfo) {
      const data = {
            farmer : farmer,
            crop : crop,
            operation : operation, 
            quantity:quantity,
            quality:quality,
            type:type,
            variety:variety,
            rainfall:rainfall,
            yearOfrelease:yearOfrelease,
            seedRate:seedRate,
            additionalInfo:additionalInfo

    };
  
    return this.http.put(`${this.url}/api/plants/${id}`,data);
  }

  delete(id) {
    return this.http.delete(`${this.url}/api/plants/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.url);
  }

  getAllPlantQuantity(){

    return this.http.get(`${this.url}/api/plants/quantity/allPlant`);
  }

  getAllPlantCount(){

    return this.http.get(`${this.url}/api/plants/count/allPlant`);
  }
  

  getSpecificExWorkerPlant() {
    return this.http.get(`${this.url}/api/plants/count/specificPlant`);
  }

  getSpecificExWorkerPlantQuantity() {
    return this.http.get(`${this.url}/api/plants/count/specificPlantQuantityCount`);
  }

  getPlantsEachExChart(): Observable<Charts> {
    const url = `${this.url}/api/plants/count/specificPlant`;
    return this.http.get<Charts>(url).pipe(
      tap(_ => console.log(`Plant chart data`))
    );
  }

}
   