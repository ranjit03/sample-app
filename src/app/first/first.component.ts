import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input() title; 
  @Input() userName;
  @Output() changeTitleFromFirst = new EventEmitter<{}>();
  @Output() changeTitleFromUser = new EventEmitter <{title:string}>()

  constructor() { }

  ngOnInit() {
  }
  
  changeTitle() {
    console.log ("this log is at emitter")
    this.changeTitleFromFirst.emit({})

  }

  userInput(event) {
    console.log(event)
   
    this.changeTitleFromUser.emit({title:event.title})

  }
 
}
