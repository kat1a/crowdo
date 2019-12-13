import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crowdo-homeform',
  templateUrl: './homeform.component.html',
  styleUrls: ['./homeform.component.scss']
})
export class HomeformComponent implements OnInit {
  Arr = Array; //Array type captured in a variable
  num:number = 20;
  constructor() { }

  ngOnInit() {
  }

}
