import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url='https:api.openweathermap.org/data/2.5/weather';
apiKey='d4b21727c92120f8da109f63052b5bb7';
  constructor( private http:HttpClient) { }

  getWeatherDataByCoords(lat:any,lon: any){

  let params= new HttpParams()
  .set('lat',lat)
  .set('lon',lon)
  .set('units','imperial')
  .set("appId",this.apiKey)

  return this.http.get(this.url,{params});
  //return this.http.get(`${environment.apiUrl}`+'/data/2.5/weather',{params});

            }

  getWeatherDataByCityName(city:string){
    
  let params= new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set("appId",this.apiKey)

  return this.http.get(this.url,{params});


  }
}