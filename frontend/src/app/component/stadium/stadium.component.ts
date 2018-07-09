import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {  Stadium } from '../../models/stadium';
import { StadiumService } from '../../services/stadium.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
@Input('stadium') stadium:Stadium;



  constructor(public stadiumService:StadiumService) { }

  ngOnInit() {
  }

  detailsDisp(stadium:Stadium){
    console.log(stadium);
    this.stadiumService.detailsDisp(this.stadium);
  }  

  
  

}
