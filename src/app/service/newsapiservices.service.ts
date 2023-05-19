import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971";
  businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=676f017549224f488970f1835f9db971';
  healthApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=676f017549224f488970f1835f9db971';
  sciencetApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=676f017549224f488970f1835f9db971';
  entertainmentApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=676f017549224f488970f1835f9db971';
  technologyApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=676f017549224f488970f1835f9db971';
  sportsApiUrl = 'https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=676f017549224f488970f1835f9db971';


  topSlider(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  topBusiness(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }

  tophealth(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }

  topscience(): Observable<any> {
    return this._http.get(this.sciencetApiUrl);
  }

  topentertainment(): Observable<any> {
    return this._http.get(this.entertainmentApiUrl);
  }

  toptechnology(): Observable<any> {
    return this._http.get(this.technologyApiUrl);
  }

  topsports(): Observable<any> {
    return this._http.get(this.sportsApiUrl);
  }

}

