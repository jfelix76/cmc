import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  introMessage: string = `
  
    Create My Cookbook wants to help you pass on your legacy, make a difference or establish your brand...
  
  `;

  constructor() { }

  ngOnInit() {
  }

}
