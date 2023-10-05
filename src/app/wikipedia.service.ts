import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient){} 
  
  search(term: string){
    return this.http.get();
  }
sdsd
}

//Services goal is to fetch/store/update any king of data in our app
//Almost always where we are going to put network request
//Angular will automatically create a single instance of service class
//We will not be writing new Services....