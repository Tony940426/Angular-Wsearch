import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

interface WikipediaResponse{
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient){}
  //The above is a depedency injector. Angular creates a instance 
  
  public search(term: string){
      return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*'
        }
      }).pipe(
        map(response => {
          return response && response['query'] ? response['query']['search'] : [];
        })
      )
    }
  }

//Services goal is to fetch/store/update any kind of data in our app
//Almost always where we are going to put network request
//Angular will automatically create a single instance of service class
//We will not be writing new Services....

//***ABOUT SECURITY***
//We only want to show HTML in our app that we have created.
//The reason for that is to protect the app from cross-site scripting attacks (XSS)
//Angular will help escape HTML