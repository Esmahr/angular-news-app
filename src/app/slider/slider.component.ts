import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  constructor(private _services: NewsapiservicesService) { }

  //display data
  topSliderDisplay: any = [1];

  ngOnInit(): void {

    this._services.topSlider().subscribe((result) => {
      console.log(result);
      this.topSliderDisplay = result.articles;
    })

  }

}



