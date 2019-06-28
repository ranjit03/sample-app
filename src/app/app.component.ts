import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample app';
  userName = 'Awesome'
  interpolation = "string interpolation passed";
  changeTitle(event){

    arguments.length === 0 ? this.title ='first method changed title':this.title = event.title;
  }



}
