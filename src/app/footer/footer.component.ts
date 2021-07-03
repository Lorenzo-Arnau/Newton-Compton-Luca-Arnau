import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // data

  faCircleUP= faArrowAltCircleUp;
  copyright=faCopyright;

  constructor() { }

  ngOnInit(): void {
  }
  // methods

  return(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
