import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url='https:api.openweathermap.org/data/2.5/weather';
url2='https:api.openweathermap.org/data/2.5/forecast';
apiKey='d4b21727c92120f8da109f63052b5bb7';
  constructor( private http:HttpClient) { }

  getWeatherDataByCoords(lat:any,lon: any){

  let params= new HttpParams()
  .set('lat',lat)
  .set('lon',lon)
  .set('units','metric')
  .set("appId",this.apiKey)

  return this.http.get(this.url,{params});

            }

            getfivedayWeatherDataByCoords(lat:any,lon: any){

              let params= new HttpParams()
              .set('lat',lat)
              .set('lon',lon)
              .set('units','metric')
              .set("appId",this.apiKey)
            
              return this.http.get(this.url2,{params});
            
                        }

  getWeatherDataByCityName(city:string){
    
  let params= new HttpParams()
  .set('q',city)
  .set('units','metric')
  .set("appId",this.apiKey)

  return this.http.get(this.url,{params});


  }
}