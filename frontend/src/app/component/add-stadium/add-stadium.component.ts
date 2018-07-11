import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Stadium } from '../../models/stadium';
import { StadiumService } from '../../services/stadium.service';
import { Router } from '@angular/router';

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

  constructor(public stadiumService:StadiumService,
  public routrt:Router) { }

  ngOnInit() {
  }

  addStadium(stad:Stadium){
    this.stadiumService.addStadium(stad);
    this.routrt.navigate(['/']);
  }

}
