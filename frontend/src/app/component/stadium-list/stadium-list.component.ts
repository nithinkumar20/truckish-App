import { Component, OnInit } from '@angular/core';
import { Stadium } from '../../models/stadium';
import { StadiumService } from '../../services/stadium.service';

@Component({
  selector: 'app-stadium-list',
  templateUrl: './stadium-list.component.html',
  styleUrls: ['./stadium-list.component.css']
})

export class StadiumListComponent implements OnInit {
  stadiums : Stadium[];

  constructor(public stadiumService:StadiumService) { }

  ngOnInit() {
    
 this.stadiums = this.stadiumService.getStadium();
  }

}
