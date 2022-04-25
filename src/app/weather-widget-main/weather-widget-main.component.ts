import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servizio01Service } from '../servizio01.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit, OnDestroy {
  
  Data : any;
  subscription:Subscription;
  apiEndpoint=environment.apiEndpoint
  constructor(private service01 : Servizio01Service) { }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe() 
      console.log("oggetto WeatherWidgetMainComponent distrutto ")
    } 
  }

  ngOnInit(): void {
    this.Data = {
      main : {}
    }
    this.getData()
  }
  getData() {
    let observable=this.service01.httpGet(this.apiEndpoint)
    this.subscription=observable.subscribe( httpResponse => { console.log(httpResponse); this.setData(httpResponse) })
  }
  setData(data: any) {
    this.Data = data;
   

  }

}
