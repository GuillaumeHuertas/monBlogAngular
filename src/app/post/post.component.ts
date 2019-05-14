import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postTitle : string = 'Le premier jour'; 
  postBody: string = 'Voilà le premier jour arrivé'; 
  postPoint: number = 0; 

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.postTitle; 
  }

  getBody() {
    return this.postBody; 
  }

  addPoint() {
    console.log('+ 1 point pour Gryfondor')
    this.postPoint++; 
    console.log(this.postPoint)
  }

  suppPoint() {
    console.log('- 100 points pour Serpentard')
    this.postPoint--; 
    console.log(this.postPoint)
  }

}
