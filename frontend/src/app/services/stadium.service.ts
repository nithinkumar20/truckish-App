import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Stadium } from '../models/stadium';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StadiumService {
//stadium variable
  stadiums:Stadium[];
  std1:Stadium;
  

  constructor(public http:Http) { 
  
    this.stadiums = [
      {
        name:"Rungrado 1st of May Stadium",
        city:"Pyongyang",
        capacity:114000,
        country:"North Korea",
        homeTeam:"North Korea national football team",
        details:"The Rungrado 1st of May Stadium, also known as the May Day Stadium, is a multi-purpose stadium in Pyongyang, North Korea, completed on 1 May 1989. Its first major event was the 13th World Festival of Youth and Students. It is the largest stadium in the world, with a total capacity of 114,000. The site occupies an area of 20.7 hectares (51 acres).It is not to be confused with the nearby 50,000 capacity Kim Il-sung Stadium.",
        img:"http://www.allin1platform.com/wp-content/uploads/2015/06/Rungrado-1st-of-May-Stadium.jpg"
      },
      {
        name:"Rose Bowl Stadium",
        city:"California",
        capacity:106869,
        country:"U.S.A",
        homeTeam:"U.S.A National football team",
        details:"The Rose Bowl is a United States outdoor athletic stadium, located in Pasadena, California, a northeast suburb of Los Angeles. Opened in October 1922, the stadium is recognized as a National Historic Landmark and a California Historic Civil Engineering landmark.[7] At a modern capacity of an all-seated configuration at 90,888 (making it one of the rare stadiums in college football to have such a seating arrangement; many such stadiums have bench-style seating)[1] the Rose Bowl is the 17th-largest stadium in the world, the 11th-largest stadium in the United States, and the 11th largest NCAA stadium.",
        img:"https://www.visitpasadena.com/wp-content/uploads/2016/02/Rose-Bowl-Stadium-945x596.jpg"
      },
      {
        name:"Camp Nou",
        city:"	Barcelona",
        capacity:99354,
        country:"Spain",
        homeTeam:"FC Barcelona",
        details:" Camp Nou (Catalan pronunciation: [kamˈnɔw], new field, often referred to as the Nou Camp in English)[3][4] is the home stadium of FC Barcelona since its completion in 1957.With a seating capacity of 99,354, it is the largest stadium in Spain and Europe, and the second largest association football stadium in the world in capacity. It has hosted two European Cup/Champions League finals in 1989 and 1999, two UEFA Cup Winners' Cup finals, four Inter-Cities Fairs Cup final games, five UEFA Super Cup final games, four Copa del Rey finals, two Copa de la Liga final games, twenty-one Supercopa de España final games, five matches including the opening game of the 1982 FIFA World Cup, two out of four matches at the 1964 European Nations' Cup and the football competition final at the 1992 Summer Olympics.",
        img:"https://cf-r.365ticketsglobal.com/resized/486x324/2935-nou_camp_fc_barcelona.jpg"
      },
      {
        name:"Salt Lake Stadium",
        city:"Kolkata",
        capacity:85000,
        country:"India",
        homeTeam:"Mohun Bagan",
        details:"Salt Lake Stadium, officially known as Vivekananda Yuba Bharati Krirangan (VYBK),[6] is a multipurpose stadium in Bidhannagar, Kolkata, with a current capacity of 85,000.[7] It is the largest stadium in India by seating capacity.[8] Before its renovation in 2011, it was the second largest football stadium in the world, having a seating capacity of 120,000.[9] Prior to the construction and opening of Rungrado May Day Stadium in 1989, it was the largest football stadium in the world. The stadium hosted the final match of the 2017 FIFA U-17 World Cup, alongside hosting other matches of the tournament.[10][11] As part of security measures for the 2017 FIFA U-17 World Cup, the stadium was only open for 66,687 viewers instead of the stadium’s capacity of 85,000",
        img:"http://pbs.twimg.com/media/BmhsXuGCMAAVOQv.jpg"
      },
      ]
  }
  
  //get the weather info of the selected city
  getWeather(city:string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=6ac72744be60b1c3a609680f5f0dec5b')
    .pipe(map(res => res.json()));
  }

//get the stadium detILS
  getStadium(){
    return this.stadiums;
  }

  //fetching selected stadium
  detailsDisp(stadium){
    this.std1=stadium;
    console.log(this.std1);
    return this.std1;
  }
 
}