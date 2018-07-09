import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AgmCoreModule } from '@agm/core';//maps integration

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { WeatherComponent } from './component/weather/weather.component';
import { MapComponent } from './component/map/map.component';
import { StadiumComponent } from './component/stadium/stadium.component';
import { StadiumDetailsComponent } from './component/stadium-details/stadium-details.component';
import { StadiumListComponent } from './component/stadium-list/stadium-list.component';

import { StadiumService } from "../../src/app/services/stadium.service";
import { AddStadiumComponent } from './component/add-stadium/add-stadium.component';

const routes : Routes = [
  {path:'stadiumdetails', component:StadiumDetailsComponent},
  {path: '', component:StadiumListComponent},
  {path:'addNew', component:AddStadiumComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    MapComponent,
    StadiumComponent,
    StadiumDetailsComponent,
    StadiumListComponent,
    AddStadiumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDV3Uw9Kwk1znVr2xl9DKLeIOevF8H2K3Q'
    }),
    HttpModule,
    FormsModule
  ],
  providers: [StadiumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
