import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  search(term: string){
    return 'This is the wiki search results'
  }

  constructor() { }
}

//Services goal is to fetch/store/update any king of data in our app
//Almost always where we are going to put network request
//Angular will automatically create a single instance of service class
//We will not be writing new Services....