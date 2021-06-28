import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // methods

  buy(){
    window.location.href = 'https://www.newtoncompton.com/libro/le-dieci-chiavi-di-leonardo';
  }

}
