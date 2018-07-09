import { Component, OnInit, Input } from '@angular/core';
import { Stadium } from '../../models/stadium';
import { StadiumService } from '../../services/stadium.service';

@Component({
  selector: 'app-stadium-details',
  templateUrl: './stadium-details.component.html',
  styleUrls: ['./stadium-details.component.css']
})
export class StadiumDetailsComponent implements OnInit {
  //@Input('stad') stadium:Stadium;
   stad:Stadium;

  constructor(public stadiumService:StadiumService ) {}

  ngOnInit() {
    this.stad = this.stadiumService.std1;
    console.log(this.stad);
  }

}
