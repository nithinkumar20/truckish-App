import { Component, OnInit } from '@angular/core';
import { StadiumService } from '../../services/stadium.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city='Bengaluru';
  weather:any;

  constructor(public weatherService:StadiumService) { }

  ngOnInit() {
    //fetch the selected city anme
    this.city=this.weatherService.std1.city;

    //retreiving of weather info
    this.weatherService.getWeather(this.city).subscribe(resp=>{
    this.weather=resp;
    });

  }

}
