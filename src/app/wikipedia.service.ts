import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient){}
  //The above is a depedency injector. Angular creates a instance 
  
  search(term: string){
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }

  
  
  
  
}

//Services goal is to fetch/store/update any kind of data in our app
//Almost always where we are going to put network request
//Angular will automatically create a single instance of service class
//We will not be writing new Services....