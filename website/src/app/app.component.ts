import { Component, OnInit } from '@angular/core';

declare var Instafeed: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const feed = new Instafeed({
      get: 'user',
      userId: '3459838247',
      accessToken: '3459838247.1677ed0.4d0387073de54ea7b5e0e8c3a99e5a2b',
      clientId: 'e4ffe86b08294db28fb91ba646349500',
      limit: 5,
      resolution: 'standard_resolution',
      template: '<img class="insta" src="{{image}}" />',

    });

    feed.run();
  }
}

