import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  postOne = 'Le premier jour';
  postTwo= 'Le deuxième jour'; 
  postThree= 'Le troisième'; 

  constructor() {};
  
}
