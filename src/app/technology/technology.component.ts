import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-technology',
  templateUrl: 'technology.component.html',
  styleUrls: ['./technology.component.css']
})

export class Technology{

  constructor(private _services: NewsapiservicesService) { }

  //display data
  toptechnologyDisplay: any = [1];

  ngOnInit(): void {

    this._services.toptechnology().subscribe((result) => {
      console.log(result);
      this.toptechnologyDisplay = result.articles;
    })

  }

}