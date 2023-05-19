import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-science',
  templateUrl: 'science.component.html',
  styleUrls: ['./science.component.css']
})

export class Science{

  constructor(private _services: NewsapiservicesService) { }

  //display data
  topscienceDisplay: any = [1];

  ngOnInit(): void {

    this._services.topscience().subscribe((result) => {
      console.log(result);
      this.topscienceDisplay = result.articles;
    })

  }

}