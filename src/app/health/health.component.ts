import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: 'health.component.html',
  styleUrls: ['./health.component.css']
})

export class Health {

  constructor(private _services: NewsapiservicesService) { }

  tophealthDisplay: any = [];
  
  ngOnInit(): void {
    this._services.tophealth().subscribe((result) => {
      console.log(result);
      this.tophealthDisplay = result.articles
    })
  }

}

