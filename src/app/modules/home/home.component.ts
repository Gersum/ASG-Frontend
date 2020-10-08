import { Component, OnInit } from '@angular/core';
import {icon, latLng, LeafletMouseEvent, Map, MapOptions, marker, tileLayer} from 'leaflet';
import { WeatherService } from '../../_services/weather.service';
import {MapPoint} from '../../model/map-point.model';
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../../model/app.constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat :any;
  lon:any;
  weather:any;
  locationDenied:boolean = true;
  locationDeniedEnableCity = false;
  map: Map;
  mapPoint: MapPoint;
  options: MapOptions;
  lastLayer: any;

  //results: NominatimResponse[];

  constructor (private weatherService : WeatherService) {
  }

  ngOnInit () {
    
        
  }
}