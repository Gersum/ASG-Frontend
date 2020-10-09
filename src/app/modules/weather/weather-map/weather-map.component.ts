import { Component, OnInit } from '@angular/core';
import {icon, latLng, LeafletMouseEvent, Map, MapOptions, marker, tileLayer} from 'leaflet';
import { WeatherService } from '../../../_services/weather.service';
import {MapPoint} from '../../../model/map-point.model';
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../../../model/app.constants';
import * as L from "leaflet";

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements OnInit {
  lat :any;
  lon:any;
  weather:any;
  forcast:any;
  locationDenied:boolean = true;
  locationDeniedEnableCity = false;
  map: Map;
  mapPoint: MapPoint;
  options: MapOptions;
  lastLayer: any;
  list:any;



  constructor (private weatherService : WeatherService) {
  }

  ngOnInit () {
    this.initializeDefaultMapPoint();
    this.initializeMapOptions();
   // this.weatherService.getWeatherDataByCoords(7.7,37.7)
    this.weatherService.getfivedayWeatherDataByCoords(7.7,37.7)

        .subscribe(console.log)
       this.getLocation();
       this.getLocation2();
        
  }

  initializeMap (map: Map) {
    this.map = map;
    this.createMarker();
  }

 

    getLocation(){

     if("geolocation" in navigator){

       navigator.geolocation.watchPosition((success)=>{

          this.lat = success.coords.latitude;

          this.lon = success.coords.longitude;
 
     this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{

        this.weather= data;

       });
      },(error)=>{
        if(error.code == error.PERMISSION_DENIED){
          this.locationDenied = false;
          this.locationDeniedEnableCity = true;
        }
      });
      }
    }


    getLocation2(){

      if("geolocation" in navigator){
 
        navigator.geolocation.watchPosition((success)=>{
 
           this.lat = success.coords.latitude;
 
           this.lon = success.coords.longitude;
  
      this.weatherService.getfivedayWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
 
         this.forcast= data;
 
        });
       },(error)=>{
         if(error.code == error.PERMISSION_DENIED){
           this.locationDenied = false;
           this.locationDeniedEnableCity = true;
         }
       });
       }
     }
  
 

 

  private initializeMapOptions () {
    this.options = {
      zoom: 12,
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: 'OSM'})
      ]
    }
  }

  private initializeDefaultMapPoint () {
    this.mapPoint = {
      name: 'Hello',
      latitude: DEFAULT_LATITUDE,
      longitude: DEFAULT_LONGITUDE
    };
  }

  public onMapClick (e: LeafletMouseEvent) {
    this.clearMap();
    this.updateMapPoint(e.latlng.lat, e.latlng.lng);
    this.createMarker();
    console.log('marked coordinate')
        console.log(e);
         this.lat = e.latlng.lat; 
         this.lon = e.latlng.lng;
    
        this.weatherService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
          this.weather = data;
        

        })


        this.weatherService.getfivedayWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
          this.forcast = data;
        

        })
    
  }

  
  getCity(city: string){
    this.weatherService.getWeatherDataByCityName(city).subscribe((data:any)=>{
     this.weather = data;

      this.lat = data.coord.lat;
    this.lon=data.coord.lon;
   })
}

  private updateMapPoint (latitude: number, longitude: number, name?: string) {
    this.mapPoint = {
      latitude: latitude,
      longitude: longitude,
      name: name ? name : this.mapPoint.name
    };
  }

  private createMarker () {
    this.clearMap();
    const mapIcon = this.getDefaultIcon();
    const coordinates = latLng([this.mapPoint.latitude, this.mapPoint.longitude]);
    this.lastLayer = marker(coordinates).setIcon(mapIcon).addTo(this.map);
    this.map.setView(coordinates, this.map.getZoom());
  }
  

  private getDefaultIcon () {
    return icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png'
    });
  }

  private clearMap () {
    if (this.map.hasLayer(this.lastLayer)) this.map.removeLayer(this.lastLayer);
  }

  getCoord(event:any){
        console.log('marked coordinate')
        console.log(event);
         this.lat = event.coords.lat; 
         this.lon = event.coords.lng;
    
        this.weatherService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
          this.weather = data
        })
    
      }

      

}
