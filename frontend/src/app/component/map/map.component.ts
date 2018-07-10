import { Component, OnInit } from '@angular/core';
import { StadiumService } from '../../services/stadium.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  city='';
  ordinates:any;
  title: string = 'My first AGM project';
  //zoom level
  zoom:number=10; 
  lat:number;
  lng:number;

  constructor(public mapService:StadiumService) {
   }

  ngOnInit() {
    //fetch the selected city anme
    this.city=this.mapService.std1.city;
    

    //retreiving of latitude ang langitude
    this.mapService.getWeather(this.city).subscribe(resp=>{
    this.ordinates=resp;
    this.lng=this.ordinates.coord.lon;
    this.lat=this.ordinates.coord.lat;
    });
  }

 
  



}