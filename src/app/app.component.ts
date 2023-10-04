import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService){}
    //Constructor gets called whenever a instance gets created of App Component
    //Wiki will be added as a private property and is a instance of WikipediaService class
    //


  onTerm(term: string){
    const results = this.wikipedia.search(term);
    console.log(results)
  }
}
