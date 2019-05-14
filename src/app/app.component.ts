import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Le premier jour ....',
      body: 'Dieu créa le Ciel et la Terre et il vit que cela était bon, sur sa lancée il continua avec les piaf et tous leurs amis'
    },
    {
      title: 'le deuxième jour ...',
      body: 'Dieu créa le manager pour lui donner du travail et pour que lui, Dieu, puisse se reposer'
    },
    {
      title: 'le troisième jour ...',
      body: 'Dieu observa que le manager ne travaillait pas, cela était trop dur pour lui. Dieu créa donc le collaborateur pour que le manager puisse exploiter ses talents jusque mort s\' en suive'
    }
  ];

  constructor() {};
  
}
