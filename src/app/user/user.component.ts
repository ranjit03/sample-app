import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


import { SampleService } from '../sample.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
 
  @Output() userTitle = new EventEmitter <{title:string}>();
  @Input() userName;
  
  sService: SampleService; 

  constructor(sService: SampleService) {
    this.sService = sService;
   }

  ngOnInit() {
  }

  userInput(event){
    console.log(event.target.value)
   console.log (this.sService.data)
    this.userTitle.emit({title:event.target.value})
  }

}
