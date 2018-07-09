import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Stadium } from '../../models/stadium';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  name:string;
  city:string;
  capacity:number;
  country:string;
  homeTeam:string;
  details:string;
  img:string;

  constructor() { }

  ngOnInit() {
  }

  addStadium(stad:Stadium){
    console.log(stad);
  }

}
