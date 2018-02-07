import { Component, OnInit } from '@angular/core';

declare var Instafeed: any;

@Component({
  selector: 'app-gallery-insta',
  templateUrl: './gallery-insta.component.html',
  styleUrls: ['./gallery-insta.component.scss']
})
export class GalleryInstaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const feed = new Instafeed({
      get: 'user',
      userId: '3459838247',
      accessToken: '3459838247.1677ed0.4d0387073de54ea7b5e0e8c3a99e5a2b',
      clientId: 'e4ffe86b08294db28fb91ba646349500',
      limit: 5,
      resolution: 'standard_resolution',
      template: '<img class="insta" src="{{image}}" />',
      after: this.setSize
    });

    feed.run();
  }

  setSize() {
    const w = (window.innerHeight + 2) / 2;
    const insta = document.getElementsByClassName('insta');
    for (let i = 0; i < insta.length; i++) {
      (<HTMLElement>insta[i]).style.width = w / 2 + 'px';
    }
    (<HTMLElement>document.getElementsByClassName('insta')[0]).style.width = w + 'px';
    (<HTMLElement>document.getElementById('instafeed')).style.width = w + 'px';
  }

  onResize(event){
    if (window.innerHeight >= 700) {
      this.setSize();
    }
  }
}
