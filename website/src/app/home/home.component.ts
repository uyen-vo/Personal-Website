import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  tools: string;
  body: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Welcome.';
    // this.tools = 'texas a&m 2018 // programmer // designer';
    // tslint:disable-next-line:max-line-length
    // this.body = 'Welcome to my website! Junior at Texas A&M pursuing my B.S. in Computer Science and minor in Art. Also an aspiring watercolor artist and graphic designer. Check me out!';
    this.tools = 'this is typical tool text';
    // tslint:disable-next-line:max-line-length
    this.body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  }

}
