import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sports',
  templateUrl: 'sports.component.html',
  styleUrls: ['./sports.component.css']
})

export class Sports{

  constructor(private _services: NewsapiservicesService) { }

  //display data
  topsportsDisplay: any = [1];

  ngOnInit(): void {

    this._services.topsports().subscribe((result) => {
      console.log(result);
      this.topsportsDisplay = result.articles;
    })

  }

}
