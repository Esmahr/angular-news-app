import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: 'entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})

export class Entertainment{

  constructor(private _services: NewsapiservicesService) { }

  //display data
  topentertainmentDisplay: any = [1];

  ngOnInit(): void {

    this._services.topentertainment().subscribe((result) => {
      console.log(result);
      this.topentertainmentDisplay = result.articles;
    })

  }

}
