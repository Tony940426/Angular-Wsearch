import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  //<Generic Annotation. It just means we will eventually 'emit' a string>
  //EventEmitter is a class in Angular used for emitting customer events from
  //child compones to their parents. It is used in conjuction with out.

  term = '';

  onFormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
