import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Stadium } from '../../models/stadium';
import { StadiumService } from '../../services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stad:Stadium = {
    name:'',
  city:'',
  capacity:0,
  country:'',
  homeTeam:'',
  details:'',
  img:''
  }

  constructor(public stadiumService:StadiumService) { }

  ngOnInit() {
  }

  addStadium(stad:Stadium){
    this.stadiumService.addStadium(stad);
  }

}
