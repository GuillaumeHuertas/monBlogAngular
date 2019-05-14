import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Le premier jour',
      body: 'lalalala'
    },
    {
      title: 'le deuxième jour',
      body: 'lilililili'
    },
    {
      title: 'le troisième jour',
      body: 'lolololololo'
    }
  ];
  
  constructor() {};
  
}
