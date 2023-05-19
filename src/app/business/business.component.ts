import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: 'business.component.html',
  styleUrls: ['./business.component.css']
})

export class Business{

  constructor(private _servicesb: NewsapiservicesService) { }

  topBusinessDisplay:any = [1];

  ngOnInit(): void {

    this._servicesb.topBusiness().subscribe((result)=> {

      console.log(result);
      this.topBusinessDisplay = result.articles;
    })
  }

}