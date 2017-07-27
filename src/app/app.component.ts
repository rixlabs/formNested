import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public films: Movie;

  constructor() {
    
  }

  ngOnInit() {
    this.films = {name: "25th hour", vote: 5.8};
  }

  onSubmit() {
    console.log("From outside");
  }

}

export interface Movie {
  name: string;
  vote: number;
}