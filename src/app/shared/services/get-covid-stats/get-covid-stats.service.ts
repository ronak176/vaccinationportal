import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCovidStatsService {

  constructor(private http: HttpClient) { }

  getCovidStats(): Observable<any> {
    return this.http.get<any>(
      'https://corona.lmao.ninja/v2/countries/India?yesterday=true&strict=true&query'
    );
  }

  getCovidNews() : Observable<any>{
    return this.http.get<any>(
      'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5130c7a1bd134235a6284b89e4321ee5'
    )
  }

  getCovidNews2() : Observable<any>{
    return this.http.get<any>(
      'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json'
    )
  }
}
